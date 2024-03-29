// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import Browser from 'webextension-polyfill'

export const MAIN_UI_URL = Browser.runtime.getURL('index.html')

export const openInNewTab = () => Browser.tabs.create({ url: MAIN_UI_URL })
