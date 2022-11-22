import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import ErrorBoundary from './ErrorBoundary'

import { store } from './store'
import { setAppType } from './store/slices/app'

import initSentry from './sentry'

import { getFromLocationSearch } from './utils/location'

import './index.css'

const init = () => {
  store.dispatch(setAppType(getFromLocationSearch(window.location.search)))
}

const renderApp = () => {
  const rootDom = document.getElementById('root')
  if (!rootDom) {
    throw new Error('Root element not found')
  }

  const root = createRoot(rootDom)
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  )
}

;(async () => {
  init()
  initSentry()
  renderApp()
})()
