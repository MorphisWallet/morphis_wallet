// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import passworder from '@metamask/browser-passworder'

type Serializable =
  | string
  | number
  | boolean
  | { [index: string]: Serializable }

export const encrypt = async (
  password: string,
  secrets: Serializable
): Promise<string> => passworder.encrypt(password, secrets)

export const decrypt = async <T extends Serializable>(
  password: string,
  ciphertext: string
): Promise<T> => (await passworder.decrypt(password, ciphertext)) as T
