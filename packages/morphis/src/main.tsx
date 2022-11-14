import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import ErrorBoundary from './ErrorBoundary'
import { Loading } from '@components/loading'

import store from '@core/store'
import { initAppType, initNetworkFromStorage } from '@core/slices/app'
import { getFromLocationSearch } from '@core/slices/app/AppType'
import { thunkExtras } from '@core/store/thunk-extras'

import initSentry from '@shared/sentry'

async function init() {
  if (import.meta.env.DEV) {
    Object.defineProperty(window, 'store', { value: store })
  }
  store.dispatch(initAppType(getFromLocationSearch(window.location.search)))
  await store.dispatch(initNetworkFromStorage()).unwrap()
  await thunkExtras.background.init(store.dispatch)
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
        <Suspense fallback={<Loading loading />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  )
}

;(async () => {
  await init()
  initSentry()
  renderApp()
})()
