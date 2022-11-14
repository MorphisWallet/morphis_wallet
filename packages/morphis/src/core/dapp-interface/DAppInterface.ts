// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { filter, map } from 'rxjs'

import { mapToPromise } from './utils'
import { createMessage } from '@shared/messaging/messages'
import { WindowMessageStream } from '@shared/messaging/WindowMessageStream'
import { ALL_PERMISSION_TYPES } from '@shared/messaging/messages/payloads/permissions'

import type {
  SuiAddress,
  MoveCallTransaction,
  SignableTransaction,
} from '@mysten/sui.js'
import type { Payload } from '@shared/messaging/messages/payloads'
import type { GetAccount } from '@shared/messaging/messages/payloads/account/GetAccount'
import type { GetAccountResponse } from '@shared/messaging/messages/payloads/account/GetAccountResponse'
import type {
  PermissionType,
  HasPermissionsRequest,
  HasPermissionsResponse,
  AcquirePermissionsRequest,
  AcquirePermissionsResponse,
} from '@shared/messaging/messages/payloads/permissions'
import type {
  ExecuteTransactionRequest,
  ExecuteTransactionResponse,
} from '@shared/messaging/messages/payloads/transactions'
import type { Observable } from 'rxjs'

export class DAppInterface {
  private _messagesStream: WindowMessageStream

  constructor() {
    this._messagesStream = new WindowMessageStream(
      'sui_in-page',
      'sui_content-script'
    )
  }

  public hasPermissions(
    permissions: readonly PermissionType[] = ALL_PERMISSION_TYPES
  ): Promise<boolean> {
    return mapToPromise(
      this.send<HasPermissionsRequest, HasPermissionsResponse>({
        type: 'has-permissions-request',
        permissions,
      }),
      (response) => response.result
    )
  }

  public requestPermissions(
    permissions: readonly PermissionType[] = ALL_PERMISSION_TYPES
  ): Promise<boolean> {
    return mapToPromise(
      this.send<AcquirePermissionsRequest, AcquirePermissionsResponse>({
        type: 'acquire-permissions-request',
        permissions,
      }),
      (response) => response.result
    )
  }

  public getAccounts(): Promise<SuiAddress[]> {
    return mapToPromise(
      this.send<GetAccount, GetAccountResponse>({
        type: 'get-account',
      }),
      (response) => response.accounts
    )
  }

  public signAndExecuteTransaction(transaction: SignableTransaction) {
    return mapToPromise(
      this.send<ExecuteTransactionRequest, ExecuteTransactionResponse>({
        type: 'execute-transaction-request',
        transaction: {
          type: 'v2',
          data: transaction,
        },
      }),
      (response) => response.result
    )
  }

  public executeMoveCall(transaction: MoveCallTransaction) {
    return mapToPromise(
      this.send<ExecuteTransactionRequest, ExecuteTransactionResponse>({
        type: 'execute-transaction-request',
        transaction: {
          type: 'move-call',
          data: transaction,
        },
      }),
      (response) => response.result
    )
  }

  public executeSerializedMoveCall(tx: string | Uint8Array) {
    const data =
      typeof tx === 'string' ? tx : Buffer.from(tx).toString('base64')
    return mapToPromise(
      this.send<ExecuteTransactionRequest, ExecuteTransactionResponse>({
        type: 'execute-transaction-request',
        transaction: {
          type: 'serialized-move-call',
          data,
        },
      }),
      (response) => response.result
    )
  }

  private send<
    RequestPayload extends Payload,
    ResponsePayload extends Payload | void = void
  >(
    payload: RequestPayload,
    responseForID?: string
  ): Observable<ResponsePayload> {
    const msg = createMessage(payload, responseForID)
    this._messagesStream.send(msg)
    return this._messagesStream.messages.pipe(
      filter(({ id }) => id === msg.id),
      map((msg) => msg.payload as ResponsePayload)
    )
  }
}
