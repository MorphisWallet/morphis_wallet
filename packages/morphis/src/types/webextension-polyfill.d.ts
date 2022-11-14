// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Runtime } from 'webextension-polyfill'

declare module 'webextension-polyfill' {
  declare namespace Runtime {
    declare interface MessageSender {
      origin?: string
    }
  }
}
