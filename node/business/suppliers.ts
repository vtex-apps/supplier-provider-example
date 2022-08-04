import type { ProtocolRequest } from '../typings/protocolRequest'
import { generateMockSupplier } from './mock'
import type { Supplier } from '../typings/supplier'

export function getSuppliers(payload: ProtocolRequest) {
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
