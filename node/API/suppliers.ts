import { json } from 'co-body'

import { getSuppliers } from '../business/supplierProvider'

export const provideSuppliers = async ({ req, response }: Context) => {
  const payload = await json(req)

  const sups = await getSuppliers(payload)

  if (sups.length > 0) {
    response.body = sups
    response.status = 200
  } else {
    response.body = 'Suppliers not found'
    response.status = 404
  }
}
