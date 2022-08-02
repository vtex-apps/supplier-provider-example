import type { ProtocolRequest } from '../typings/protocolRequest'
import { generateSupplier } from './mock'

export async function getSuppliers(payload: ProtocolRequest) {
  return [await generateSupplier(payload), await generateSupplier(payload)]
}
