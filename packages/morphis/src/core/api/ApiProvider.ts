import { JsonRpcProvider, RawSigner, Network } from '@mysten/sui.js'

import type { Keypair } from '@mysten/sui.js'

const getDefaultApiEnv = () => {
  const apiEnv = import.meta.env.VITE_API_ENV

  if (apiEnv && !Object.keys(Network).includes(apiEnv)) {
    throw new Error(`Unknown environment variable API_ENV, ${apiEnv}`)
  }
  return apiEnv ? Network[apiEnv as keyof typeof Network] : Network.DEVNET
}

export const DEFAULT_API_ENV = getDefaultApiEnv()

export class ApiProviderBase {
  private _apiFullNodeProvider?: JsonRpcProvider
  private _signer: RawSigner | null = null

  public setNewJsonRpcProvider(apiEnv: Network = DEFAULT_API_ENV) {
    this._apiFullNodeProvider = new JsonRpcProvider(apiEnv)
    this._signer = null
  }

  public get instance() {
    if (!this._apiFullNodeProvider) {
      this.setNewJsonRpcProvider()
    }

    return {
      fullNode: this._apiFullNodeProvider,
    }
  }

  public getSignerInstance(keypair: Keypair): RawSigner {
    if (!this._apiFullNodeProvider) {
      this.setNewJsonRpcProvider()
    }

    if (!this._signer) {
      this._signer = new RawSigner(keypair, this._apiFullNodeProvider)
    }

    return this._signer
  }
}

export const ApiProvider = new ApiProviderBase()
