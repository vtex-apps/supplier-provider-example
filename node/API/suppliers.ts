import type { ProtocolRequest } from '@vtex/supplier-provider-sdk'
import { json } from 'co-body'

import { getSuppliers } from '../business/suppliers'

export async function provideSuppliers({ req, response }: Context) {
  const payload: ProtocolRequest = await json(req)

  const sups = getSuppliers(payload)

  if (sups.length > 0) {
    response.body = sups
    response.status = 200
  } else {
    response.body = 'Suppliers not found'
    response.status = 404
  }
}
