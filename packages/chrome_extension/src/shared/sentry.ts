import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import packageJson from '../../package.json'

const WALLET_VERSION = JSON.stringify(packageJson.version)
const IS_PROD = import.meta.env.PROD

const initSentry = () => {
  if (!IS_PROD) {
    return
  }

  const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN
  if (!SENTRY_DSN) {
    console.warn('No sentry dsn from environment variables')
    return
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [new BrowserTracing()],
    release: WALLET_VERSION,
    tracesSampleRate: 1.0,
  })
}

export default initSentry
