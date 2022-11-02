import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import packageJson from '../package.json'

const WALLET_VERSION = JSON.stringify(packageJson.version)
const IS_PROD = process.env.NODE_ENV === 'production'

export default function initSentry() {
  if (!IS_PROD) return

  const SENTRY_DSN = process.env.SENTRY_DSN;

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
