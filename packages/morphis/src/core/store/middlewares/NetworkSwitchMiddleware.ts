// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { isAnyOf } from '@reduxjs/toolkit'

import { changeRPCNetwork } from '@core/slices/app'
import { clearForNetworkSwitch } from '@core/slices/sui-objects'

import type { Middleware } from '@reduxjs/toolkit'

const isChangeNetwork = isAnyOf(changeRPCNetwork.pending)

export const NetworkSwitchMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isChangeNetwork(action)) {
      dispatch(clearForNetworkSwitch())
    }
    return next(action)
  }
