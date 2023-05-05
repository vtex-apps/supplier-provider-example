import { json } from 'co-body'

import { getSuppliersByMiniCart } from '../business/suppliers'

export async function provideSuppliersUsingMiniCart({
  req,
  response,
}: Context) {
  const payload = await json(req)
  const suppliers = getSuppliersByMiniCart(payload)

  response.status = 200
  response.body = suppliers
}
