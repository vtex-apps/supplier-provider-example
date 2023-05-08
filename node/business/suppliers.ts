import type { RecipientsBuilderPayload } from '../typings/protocolRequest'
import type { Supplier } from '../typings/supplier'

export function getSuppliersByMiniCart(payload: RecipientsBuilderPayload) {
  const operationValue = payload.operationValue ?? 100
  const supplier: Supplier = {
    id: 'mock',
    name: 'mocked',
    amount: operationValue,
    document: '1111',
    documentType: 'CNPJ',
    role: 'influencer',
    commissionAmount: 100,
    chargebackLiable: false,
    chargeProcesssingFee: false,
  }

  return [supplier]
}
