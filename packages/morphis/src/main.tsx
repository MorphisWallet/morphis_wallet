import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import initSentry from './sentry'

import App from './App'
import './index.css'

function renderApp() {
  const rootDom = document.getElementById('root')
  if (!rootDom) {
    throw new Error('Root element not found')
  }

  const root = createRoot(rootDom)
  root.render(
    <StrictMode>
      <BrowserRouter>
        <IntlProvider locale={navigator.language}>
          <App />
        </IntlProvider>
      </BrowserRouter>
    </StrictMode>
  )
}

;(async () => {
  initSentry()
  renderApp()
})()
