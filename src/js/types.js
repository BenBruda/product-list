export type Product = {
  id: number,
  name: string,
  description: string
};

export type StoreState = {
  +products: Array<{
    +id: number,
    +name: string,
    +description: string
  }>
};

export type AddProductAction = {
  type: 'ADD_PRODUCT',
  product: Product
};

export type UpdateProductAction = {
  type: 'UPDATE_PRODUCT',
  product: Product
};

export type SearchProductAction = {
  type: 'ADD_PRODUCT',
  text: string
};

export type ShowModalAction = {
  type: 'SHOW_MODAL'
};

export type HideModalAction = {
  type: 'HIDE_MODAL'
};

export type HideNotificationAction = {
  type: 'HIDE_NOTIFICATION'
};

export type SelectProductAction = {
  type: 'SELECT_PRODUCT'
};

export type RemoveProductAction = { type: 'REMOVE_PRODUCT', id: number };

export type Action =
  | AddProductAction
  | RemoveProductAction
  | SearchProductAction
  | UpdateProductAction
  | ShowModalAction
  | HideModalAction
  | HideNotificationAction
  | SelectProductAction;
