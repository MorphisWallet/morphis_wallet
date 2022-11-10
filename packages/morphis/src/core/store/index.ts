import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './root_reducer'
import { thunkExtras } from './thunk_extras'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: thunkExtras,
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
