import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
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
        <Suspense fallback={<div>loading</div>}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  )
}

;(async () => {
  initSentry()
  renderApp()
})()
