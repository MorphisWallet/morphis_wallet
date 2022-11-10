import passworder from '@metamask/browser-passworder'

export const encrypt = async (
  password: string,
  secrets: Buffer
): Promise<string> => passworder.encrypt(password, secrets)

export const decrypt = async (
  password: string,
  ciphertext: string
): Promise<Buffer> =>
  passworder.decrypt(password, ciphertext) as Promise<Buffer>
