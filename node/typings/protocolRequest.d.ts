export type Item = {
  id: string
  name: string
  value: number
  quantity: number
  priceTags?: [
    {
      name: string
      value: number
      isPercentual: bool
    }
  ]
  components?: Item[]
  commission?: number
  freightCommission?: number
  sellerChain?: string[]
  shippingDiscout?: number
  discount?: number
  refId?: string
  productId?: string
  sellingPrice?: number
  sellerId?: string
  dockId?: string
  categoryId?: string
  categoryName?: string
  deliveryChannel?: string
  deliveryType?: string
  deliverySlaInMinutes?: Long
  deliveryWindow?: {
    startDate: Date
    endDate: Date
  }
  tax?: number
  freight?: number
}

export interface Seller {
  id: string
  name: string
  document: string
  documentType: string
}

export interface MiniCart {
  items: Item[]
  sellers?: Array<{
    id: string
    name: string
    document: string
    documentType: string
  }>
  freight?: number
  orderUrl?: string
  tax?: number
  shippingDate?: Date
  shippingEstimated?: string
  isGifftRegistry?: bool
  giftRegistryDescription?: string
  giftRegistryId?: string
  isPickupStore?: boolean
  isCallCenter?: bool
}

export interface RecipientsBuilderPayload {
  miniCart: MiniCart
  operationValue: number
  orderId: string
  transactionId: string
  operationValue?: number
  chargeProcessingFee?: boolean
  chargebackLiable?: boolean
  proportionalRefund?: string
  currency?: string
}
