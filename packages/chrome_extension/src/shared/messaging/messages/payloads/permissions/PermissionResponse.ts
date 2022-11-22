// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '..'

import type { SuiAddress } from '@mysten/sui.js'
import type { BasePayload, Payload } from '..'

export interface PermissionResponse extends BasePayload {
  type: 'permission-response'
  id: string
  accounts: SuiAddress[]
  allowed: boolean
  responseDate: string
}

export function isPermissionResponse(
  payload: Payload
): payload is PermissionResponse {
  return isBasePayload(payload) && payload.type === 'permission-response'
}
