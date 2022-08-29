# Supplier Protocol 

### Glossary 

| Word               | Meaning                                                                                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Supplier           | Anyone who provides a service to the merchant and participate in the split                                                                            |
| Split              | The operation that splits the amount of the payment among the suppliers                                                                               |
| Supplier Provider  | An API that provides the supplier that will be called by the `recipients builder`                                                                     |
| [Recipients builder](https://github.com/vtex/recipients-builder) | The IO App that will identify the supplier provider linked in the account and will request all the providers, then send the result to the ``gateway`` |
| Gateway            | The application that process the payment                                                                                                                                                      |
| Suppliers Providers Builder | A builder present in the builder-hub, declared in the manifest.json. <br> automaticallyThis builder automatically sets the route that will be called by the recipients-builder and the necessaries policies of the supplier provider | 


### The payload format
Currently the data that the supplier provider will receive is composed by the transaction id and the order id
```ts 
	{
		"transactionId" : string, 
		"orderId": string
	}
```
### The response format 
We expect that the response of the supplier provider send a object that implements the follow interface
```Typescript
	{
	  id: string
	  name: string
	  documentType: string
	  document: string
	  role: string
	  amount: number
	}
```

# Implementing a supplier provider
To implement a supplier provider you just need to clone this repository and implement the body of ``getSuppliers``  function, found in `{root}/node/business/suppliers.ts` . By default, the current body returns a list of mock suppliers. 
```ts
export function getSuppliers(payload: ProtocolRequest) : Suppliers[] {
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
```

In this function you must implement the way you will return a supplier(s).

#### About the routes
The `Supplier Provider Builder` will automatically set the route `/suppliers` , this route is the one that will be called by the `Recipients Builder` . By default this build is already declared in this example. 
``` json
{
	"builders": 
	{
		"supplierProvider": "0.x",
		"node": "6.x"
	}
}
```

## Running
To run the application and link it to your account you can just make: 

	vtex link 

