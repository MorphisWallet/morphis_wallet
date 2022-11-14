// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import Browser from 'webextension-polyfill'

const WALLET_VERSION = Browser.runtime.getManifest().version
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN

const IS_PROD = import.meta.env.PROD

export default function initSentry() {
  if (!IS_PROD) return

  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [new BrowserTracing()],
    release: WALLET_VERSION,
    tracesSampleRate: 1.0,
  })
}

// expand this breadcrumb
type Breadcrumbs = {
  type: 'debug'
  category: string
  message: string
}

export function addSentryBreadcrumb(breadcrumbs: Breadcrumbs) {
  if (!IS_PROD) return
  Sentry.addBreadcrumb(breadcrumbs)
}

export function reportSentryError(error: Error) {
  if (!IS_PROD) return
  Sentry.captureException(error)
}
