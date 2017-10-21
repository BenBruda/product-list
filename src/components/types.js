export type Product = {
  id: number,
  name: string,
  description: string
};

export type AddProductAction = {
  type: 'ADD_PRODUCT',
  product: Product
};

export type StoreState = {
  +products: Array<{
    +id: number,
    +name: string,
    +description: string
  }>
};

export type RemoveProductAction = { type: 'REMOVE_PRODUCT', index: number };

export type Action = AddProductAction | RemoveProductAction;
