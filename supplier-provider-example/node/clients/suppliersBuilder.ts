import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

import type { SuppliersProvider } from '../typings/supplier'

export default class SupplierBuilder extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://vini--ottermarketplace.myvtex.com/_v/', context, options)
  }

  public async putProvider(provider: SuppliersProvider): Promise<string> {
    return this.http.put('suppliers-provider/', provider, {
      metric: 'put-provider',
    })
  }
}
