import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@src/store'

type AccountState = {
  creating: boolean
  address: string | null
  isLocked: boolean
  isInitialized: boolean
}

const initialState: AccountState = {
  creating: false,
  address: null,
  isLocked: false,
  isInitialized: false,
}

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
  },
})

// account actions
export const { setAddress } = slice.actions

// account selectors
export const getAddress = ({ account }: RootState) => account.address

// account reducer
export const accountReducer = slice.reducer
