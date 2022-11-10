import {
  generateMnemonic as bip39GenerateMnemonic,
  validateMnemonic as bip39ValidateMnemonic,
} from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english'

// TODO: i18n
/**
 * @returns 12-word string splitted by spaces
 */
export const generateMnemonic = (): string => bip39GenerateMnemonic(wordlist)

/**
 * Validate a mnemonic string in the BIP39 English wordlist.
 *
 * @param mnemonics a words string split by spaces of length 12/15/18/21/24.
 *
 * @returns true if the mnemonic is valid, false otherwise.
 */
export const validateMnemonics = (mnemonics: string): boolean =>
  bip39ValidateMnemonic(mnemonics, wordlist)

/**
 * Sanitize the mnemonics string provided by user.
 *
 * @param mnemonics a 12-word string split by spaces that may contain mixed cases
 * and extra spaces.
 *
 * @returns a sanitized mnemonics string.
 */
export const normalizeMnemonics = (mnemonics: string): string =>
  mnemonics
    .trim()
    .split(/\s+/)
    .map((part) => part.toLowerCase())
    .join(' ')
