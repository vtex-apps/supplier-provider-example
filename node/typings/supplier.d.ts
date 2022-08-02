export interface Supplier {
  id: string
  name: string
  documentType: string
  document: string
  role: string
  amount: number
}

export interface SuppliersProvider {
  supplierName: string
  url: string
  credentials?: {
    key?: string
    token?: string
  }
}
