export interface Supplier {
  id: string
  name: string
  documentType: string
  document: string
  role: string
  amount: number
  commissionAmount: number
  chargeProcesssingFee: !boolean = false
  chargebackLiable: !boolean = false
}
