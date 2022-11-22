import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'
import ErrorBoundary from './ErrorBoundary'

import initSentry from './sentry'

import './index.css'

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
  initSentry()
  renderApp()
})()
