// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { take } from 'rxjs'

import { PortStream } from '@core/shared/messaging/PortStream'
import { WindowMessageStream } from '@core/shared/messaging/WindowMessageStream'

import type { Message } from '@core/shared/messaging/messages'

function createPort(
  windowMsgStream: WindowMessageStream,
  currentMsg?: Message
) {
  const port = PortStream.connectToBackgroundService('sui_content<->background')
  if (currentMsg) {
    port.sendMessage(currentMsg)
  }
  port.onMessage.subscribe((msg) => {
    windowMsgStream.send(msg)
  })
  const windowMsgSub = windowMsgStream.messages.subscribe((msg) => {
    port.sendMessage(msg)
  })
  port.onDisconnect.subscribe(() => {
    windowMsgSub.unsubscribe()
    createPort(windowMsgStream)
  })
}

export function setupMessagesProxy() {
  const windowMsgStream = new WindowMessageStream(
    'sui_content-script',
    'sui_in-page'
  )
  windowMsgStream.messages.pipe(take(1)).subscribe((msg) => {
    createPort(windowMsgStream, msg)
  })
}
