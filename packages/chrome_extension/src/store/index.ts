import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './slices/app'
import { accountReducer } from './slices/account'

export const store = configureStore({
  reducer: {
    app: appReducer,
    account: accountReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
