// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { RouterProvider, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import store from '@core/store'
import { useAppDispatch, useAppSelector } from '@core/hooks'
import { setNavVisibility } from '@core/slices/app'
import { AppType } from '@core/slices/app/AppType'

import theme from './theme'
import router from './router'

import './App.less'

const HIDDEN_MENU_PATHS = [
  '/stake',
  '/nft-details',
  '/receipt',
  '/send',
  '/send/select',
  '/apps/disconnectapp',
]

const App = () => {
  const dispatch = useAppDispatch()
  const isPopup = useAppSelector((state) => state.app.appType === AppType.popup)
  const location = useLocation()

  useEffect(() => {
    document.body.classList[isPopup ? 'add' : 'remove']('is-popup')
    document.body.classList.remove('app-initializing')
  }, [isPopup])

  useEffect(() => {
    const menuVisible = !HIDDEN_MENU_PATHS.includes(location.pathname)
    dispatch(setNavVisibility(menuVisible))
  }, [location, dispatch])

  return (
    <IntlProvider locale="en">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
