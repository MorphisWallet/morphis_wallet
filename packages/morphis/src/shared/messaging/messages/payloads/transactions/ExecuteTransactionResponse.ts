// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '@shared/messaging/messages/payloads'

import type { SuiTransactionResponse } from '@mysten/sui.js'
import type { BasePayload, Payload } from '@shared/messaging/messages/payloads'

export interface ExecuteTransactionResponse extends BasePayload {
  type: 'execute-transaction-response'
  result: SuiTransactionResponse
}

export function isExecuteTransactionResponse(
  payload: Payload
): payload is ExecuteTransactionResponse {
  return (
    isBasePayload(payload) && payload.type === 'execute-transaction-response'
  )
}
