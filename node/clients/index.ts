import { IOClients } from '@vtex/api'

import SupplierBuilder from './suppliersBuilder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get supplierBuilder() {
    return this.getOrSet('supplierBuilder', SupplierBuilder)
  }
}
