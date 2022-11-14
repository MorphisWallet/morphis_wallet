// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import ApiProvider from '@core/ApiProvider'
import KeypairVault from '@core/KeypairVault'
import { BackgroundClient } from '@core/background-client'

import type { RootState } from '@core/store/RootReducer'
import type { AppDispatch } from '@core/store'

export const api = new ApiProvider()

export const thunkExtras = {
  api,
  keypairVault: new KeypairVault(),
  background: new BackgroundClient(),
}

type ThunkExtras = typeof thunkExtras

export interface AppThunkConfig {
  extra: ThunkExtras
  state: RootState
  dispatch: AppDispatch
}
