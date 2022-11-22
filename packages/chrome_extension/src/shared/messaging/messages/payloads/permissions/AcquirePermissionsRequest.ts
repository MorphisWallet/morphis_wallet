// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '..'

import type { PermissionType } from './PermissionType'
import type { BasePayload, Payload } from '..'

export interface AcquirePermissionsRequest extends BasePayload {
  type: 'acquire-permissions-request'
  permissions: readonly PermissionType[]
}

export function isAcquirePermissionsRequest(
  payload: Payload
): payload is AcquirePermissionsRequest {
  return (
    isBasePayload(payload) && payload.type === 'acquire-permissions-request'
  )
}
