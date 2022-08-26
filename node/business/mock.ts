import type { ProtocolRequest } from '@vtex/supplier-provider-sdk'

export const generateMockSupplier = ({
  orderId,
  transactionId,
}: ProtocolRequest) => {
  const roles = ['seller', 'carrier', 'salesPerson', 'entrepreneur']
  const names = ['coinshop', 'gatewayqa', 'japacoin', 'vtexargentina']

  const randomIndex = (max: number) =>
    Math.round(Math.min(Math.random() * 10, max))

  const index = randomIndex(names.length - 1)

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
