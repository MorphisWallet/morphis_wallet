// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { combineReducers } from '@reduxjs/toolkit'

import account from '@core/slices/account'
import app from '@core/slices/app'
import curatedApps from '@core/slices/dapps'
import permissions from '@core/slices/permissions'
import suiObjects from '@core/slices/sui-objects'
import transactionRequests from '@core/slices/transaction-requests'
import transactions from '@core/slices/transactions'
import txresults from '@core/slices/txresults'

const rootReducer = combineReducers({
  account,
  app,
  suiObjects,
  transactions,
  txresults,
  permissions,
  transactionRequests,
  curatedApps,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
