// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '..'

import type { BasePayload, Payload } from '..'

export interface GetPermissionRequests extends BasePayload {
  type: 'get-permission-requests'
}

export function isGetPermissionRequests(
  payload: Payload
): payload is GetPermissionRequests {
  return isBasePayload(payload) && payload.type === 'get-permission-requests'
}
