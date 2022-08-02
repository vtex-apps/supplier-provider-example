import { IOClients } from '@vtex/api'

import Status from './status'
import SupplierBuilder from './suppliersBuilder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get supplierBuilder() {
    return this.getOrSet('supplierBuilder', SupplierBuilder)
  }
}
