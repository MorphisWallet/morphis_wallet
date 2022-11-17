// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { BehaviorSubject, filter, switchMap, takeUntil } from 'rxjs'

import { Connection } from './Connection'
import { createMessage } from '@core/shared/messaging/messages'
import { isBasePayload } from '@core/shared/messaging/messages/payloads'
import {
  isGetPermissionRequests,
  isPermissionResponse,
} from '@core/shared/messaging/messages/payloads/permissions'
import { isDisconnectApp } from '@core/shared/messaging/messages/payloads/permissions/DisconnectApp'
import { isGetTransactionRequests } from '@core/shared/messaging/messages/payloads/transactions/ui/GetTransactionRequests'
import { isTransactionRequestResponse } from '@core/shared/messaging/messages/payloads/transactions/ui/TransactionRequestResponse'
import Permissions from '@core/background/Permissions'
import Tabs from '@core/background/Tabs'
import Transactions from '@core/background/Transactions'
import Keyring from '@core/background/keyring'
import { entropyToSerialized } from '@shared/utils/bip39'

import type { Message } from '@core/shared/messaging/messages'
import type { PortChannelName } from '@core/shared/messaging/PortChannelName'
import type { KeyringPayload } from '@core/shared/messaging/messages/payloads/keyring'
import type {
  Permission,
  PermissionRequests,
} from '@core/shared/messaging/messages/payloads/permissions'
import type { UpdateActiveOrigin } from '@core/shared/messaging/messages/payloads/tabs/updateActiveOrigin'
import type { TransactionRequest } from '@core/shared/messaging/messages/payloads/transactions'
import type { GetTransactionRequestsResponse } from '@core/shared/messaging/messages/payloads/transactions/ui/GetTransactionRequestsResponse'
import type { Runtime } from 'webextension-polyfill'

export class UiConnection extends Connection {
  public static readonly CHANNEL: PortChannelName = 'sui_ui<->background'
  private uiAppInitialized: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  )

  constructor(port: Runtime.Port) {
    super(port)
    this.uiAppInitialized
      .pipe(
        filter((init) => init),
        switchMap(() => Tabs.activeOrigin),
        takeUntil(this.onDisconnect)
      )
      .subscribe(({ origin, favIcon }) => {
        this.send(
          createMessage<UpdateActiveOrigin>({
            type: 'update-active-origin',
            origin,
            favIcon,
          })
        )
      })
  }

  public async sendLockedStatusUpdate(isLocked: boolean) {
    this.send(
      createMessage<KeyringPayload<'walletStatusUpdate'>>({
        type: 'keyring',
        method: 'walletStatusUpdate',
        return: {
          isLocked,
          entropy: Keyring.entropy
            ? entropyToSerialized(Keyring.entropy)
            : undefined,
          isInitialized: await Keyring.isWalletInitialized(),
        },
      })
    )
  }

  protected async handleMessage(msg: Message) {
    const { payload, id } = msg
    try {
      if (isGetPermissionRequests(payload)) {
        this.sendPermissions(
          Object.values(await Permissions.getPermissions()),
          id
        )
        // TODO: we should depend on a better message to know if app is initialized
        if (!this.uiAppInitialized.value) {
          this.uiAppInitialized.next(true)
        }
      } else if (isPermissionResponse(payload)) {
        Permissions.handlePermissionResponse(payload)
      } else if (isTransactionRequestResponse(payload)) {
        Transactions.handleMessage(payload)
      } else if (isGetTransactionRequests(payload)) {
        this.sendTransactionRequests(
          Object.values(await Transactions.getTransactionRequests()),
          id
        )
      } else if (isDisconnectApp(payload)) {
        await Permissions.delete(payload.origin)
        this.send(createMessage({ type: 'done' }, id))
      } else if (isBasePayload(payload) && payload.type === 'keyring') {
        await Keyring.handleUiMessage(msg, this)
      }
    } catch (e) {
      // just in case
      // we could log it also
    }
  }

  private sendPermissions(permissions: Permission[], requestID: string) {
    this.send(
      createMessage<PermissionRequests>(
        {
          type: 'permission-request',
          permissions,
        },
        requestID
      )
    )
  }

  private sendTransactionRequests(
    txRequests: TransactionRequest[],
    requestID: string
  ) {
    this.send(
      createMessage<GetTransactionRequestsResponse>(
        {
          type: 'get-transaction-requests-response',
          txRequests,
        },
        requestID
      )
    )
  }
}
