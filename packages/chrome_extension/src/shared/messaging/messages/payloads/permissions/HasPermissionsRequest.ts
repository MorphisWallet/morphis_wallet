// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '..'

import type { PermissionType } from './PermissionType'
import type { BasePayload, Payload } from '..'

export interface HasPermissionsRequest extends BasePayload {
  type: 'has-permissions-request'
  permissions: readonly PermissionType[]
}

export function isHasPermissionRequest(
  payload: Payload
): payload is HasPermissionsRequest {
  return isBasePayload(payload) && payload.type === 'has-permissions-request'
}
