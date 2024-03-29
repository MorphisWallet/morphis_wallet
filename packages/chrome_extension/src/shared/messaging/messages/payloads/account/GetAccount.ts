// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isBasePayload } from '..'

import type { BasePayload, Payload } from '..'

export interface GetAccount extends BasePayload {
  type: 'get-account'
}

export function isGetAccount(payload: Payload): payload is GetAccount {
  return isBasePayload(payload) && payload.type === 'get-account'
}
