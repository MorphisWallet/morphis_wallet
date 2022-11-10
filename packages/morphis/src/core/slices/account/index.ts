import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// import { AppThunkConfig } from '@core/store/thunk_extras'

import type { PayloadAction, Reducer } from '@reduxjs/toolkit'

type AccountState = {
  creating: boolean
  address: string | null
  isLocked: boolean | null
  isInitialized: boolean | null
}

const initialState: AccountState = {
  creating: false,
  address: null,
  isLocked: null,
  isInitialized: null,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAddress: (state: AccountState, action: PayloadAction<string | null>) => {
      state.address = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createMnemonic.pending, (state) => {
        state.creating = true
      })
      .addCase(createMnemonic.fulfilled, (state) => {
        state.creating = false
        state.isInitialized = true
      })
      .addCase(createMnemonic.rejected, (state) => {
        state.creating = false
      }),
})

export const { setAddress } = accountSlice.actions

export const createMnemonic = createAsyncThunk<string, { password: string }>(
  'account/createMnemonic',
  ({ password }) => {
    console.log(123, password)
    return '123'
  }
)

const reducer: Reducer<typeof initialState> = accountSlice.reducer
export default reducer
