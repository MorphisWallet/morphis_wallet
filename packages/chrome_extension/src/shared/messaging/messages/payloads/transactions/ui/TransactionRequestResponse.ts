// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '../..'

import type { SuiTransactionResponse } from '@mysten/sui.js'
import type { BasePayload, Payload } from '../..'

export interface TransactionRequestResponse extends BasePayload {
  type: 'transaction-request-response'
  txID: string
  approved: boolean
  txResult?: SuiTransactionResponse
  tsResultError?: string
}

export function isTransactionRequestResponse(
  payload: Payload
): payload is TransactionRequestResponse {
  return (
    isBasePayload(payload) && payload.type === 'transaction-request-response'
  )
}
