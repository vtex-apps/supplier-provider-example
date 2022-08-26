import type { ProtocolRequest, Supplier } from '@vtex/supplier-provider-sdk'

import { generateMockSupplier } from './mock'

export function getSuppliers(payload: ProtocolRequest): Supplier[] {
  /*
   *
   * This is the function you must implement as you will fetch yours suppliers
   *
   */
  const providedSuppliers: Supplier[] = [
    generateMockSupplier(payload),
    generateMockSupplier(payload),
  ]

  return providedSuppliers
}
