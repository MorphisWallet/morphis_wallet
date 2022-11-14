// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { reportSentryError } from '@shared/sentry'

import type { Middleware } from '@reduxjs/toolkit'

// Log event to Sentry via Redux toolkit middleware
export const SentryMiddleware: Middleware = () => (next) => (action) => {
  if (action.error) {
    reportSentryError(action.error)
  }

  return next(action)
}
