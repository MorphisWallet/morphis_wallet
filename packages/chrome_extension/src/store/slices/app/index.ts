import { createSlice } from '@reduxjs/toolkit'
// import Browser from 'webextension-polyfill'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@src/store'

export enum AppType {
  unknown,
  fullscreen,
  popup,
}

type AppState = {
  appType: AppType
  apiEnv: string
  navVisible: boolean
  customRPC?: string | null
  activeOrigin: string | null
  activeOriginFavIcon: string | null
}

const initialState: AppState = {
  appType: AppType.unknown,
  apiEnv: 'devNet',
  customRPC: null,
  navVisible: true,
  activeOrigin: null,
  activeOriginFavIcon: null,
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppType: (state, { payload }: PayloadAction<AppType>) => {
      state.appType = payload
    },
    // setApiEnv: (state, { payload }: PayloadAction<API_ENV>) => {
    //     state.apiEnv = payload;
    // },
    setCustomRPCURL: (state, { payload }: PayloadAction<string>) => {
      state.customRPC = payload
    },
    setNavVisibility: (
      state,
      { payload: isVisible }: PayloadAction<boolean>
    ) => {
      state.navVisible = isVisible
    },
    setActiveOrigin: (
      state,
      {
        payload,
      }: PayloadAction<{ origin: string | null; favIcon: string | null }>
    ) => {
      state.activeOrigin = payload.origin
      state.activeOriginFavIcon = payload.favIcon
    },
  },
})

// app actions
export const { setAppType, setNavVisibility } = slice.actions

// app selectors
export const getAppType = ({ app }: RootState) => app.appType

// app reducer
export const appReducer = slice.reducer
