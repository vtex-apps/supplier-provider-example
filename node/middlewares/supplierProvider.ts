import json from 'co-body'

import type { ProtocolRequest } from '../typings/protocolRequest'

const generateSupplier = ({ orderId, transactionId }: ProtocolRequest) => {
  const roles = ['seller', 'carrier', 'salesPerson', 'entrepreneur']
  const names = ['coinshop', 'gatewayqa', 'japacoin', 'vtexargentina']

  const randomIndex = (max: number) =>
    Math.round(Math.min(Math.random() * 10, max))

  const index = randomIndex(names.length - 1)

  // eslint-disable-next-line no-console
  console.log('index = ', index)

  return {
    id: names[index],
    document: String(
      Math.round(orderId.length * transactionId.length * 100000000000000)
    ),
    documentType: 'CNPJ',
    name: names[index],
    role: roles[randomIndex(roles.length - 1)],
    amount: Math.round(Math.random() * 2000) / 100.0,
  }
}

export async function getSuppliers(ctx: Context, next: () => Promise<any>) {
  const payload = await json(ctx.req)

  ctx.response.body = [generateSupplier(payload), generateSupplier(payload)]
  ctx.response.status = 200
  await next()
}

export const registerProvider = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  const {
    clients: { supplierBuilder },
    vtex: { account, route },
  } = ctx

  supplierBuilder.putProvider({
    supplierName: account.toString(),
    url: route.declarer ?? '',
  })
  await next()
}
