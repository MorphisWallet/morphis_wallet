import { combineReducers } from '@reduxjs/toolkit'

import accountReducer from '@core/slices/account'

const rootReducer = combineReducers({
  accountReducer,
})

export default rootReducer
