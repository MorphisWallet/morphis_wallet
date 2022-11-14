// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { configureStore } from '@reduxjs/toolkit'

import { KeypairVaultMiddleware } from './middlewares/KeypairVaultMiddleware'
import { NetworkSwitchMiddleware } from './middlewares/NetworkSwitchMiddleware'
import { SentryMiddleware } from './middlewares/SentryMiddleware'
import { thunkExtras } from './thunk-extras'
import rootReducer from '@core/store/RootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunkExtras,
      },
    }).concat(
      KeypairVaultMiddleware,
      NetworkSwitchMiddleware,
      SentryMiddleware
    ),
})

export default store

export type AppDispatch = typeof store.dispatch
