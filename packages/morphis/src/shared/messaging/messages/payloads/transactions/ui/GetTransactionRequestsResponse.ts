// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '@shared/messaging/messages/payloads'

import type { BasePayload, Payload } from '@shared/messaging/messages/payloads'
import type { TransactionRequest } from '@shared/messaging/messages/payloads/transactions'

export interface GetTransactionRequestsResponse extends BasePayload {
  type: 'get-transaction-requests-response'
  txRequests: TransactionRequest[]
}

export function isGetTransactionRequestsResponse(
  payload: Payload
): payload is GetTransactionRequestsResponse {
  return (
    isBasePayload(payload) &&
    payload.type === 'get-transaction-requests-response'
  )
}
