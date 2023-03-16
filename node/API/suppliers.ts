import { json } from 'co-body'

import { getSuppliers, getSuppliersByMiniCart } from '../business/suppliers'

export async function provideSuppliers({ req, response }: Context) {
  const payload = await json(req)

  const sups = getSuppliers(payload)

  if (sups.length > 0) {
    response.body = sups
    response.status = 200
  } else {
    response.body = 'Suppliers not found'
    response.status = 404
  }
}

export async function provideSuppliersUsingMiniCart({
  req,
  response,
}: Context) {
  const payload = await json(req)
  const suppliers = getSuppliersByMiniCart(payload)

  response.status = 200
  response.body = suppliers
}
