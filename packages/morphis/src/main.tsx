import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import initSentry from './sentry'

function renderApp() {
  const rootDom = document.getElementById('root')
  if (!rootDom) {
    throw new Error('Root element not found')
  }

  const root = createRoot(rootDom)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

;(async () => {
  initSentry()
  renderApp()
})()
