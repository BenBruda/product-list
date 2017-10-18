// @flow
import type { Product, RemoveProductAction, AddProductAction } from './types';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

function addProduct(product: Product): AddProductAction {
  return {
    type: ADD_PRODUCT,
    product
  };
}
function removeProduct(index: number): RemoveProductAction {
  return {
    type: REMOVE_PRODUCT,
    index
  };
}

export { addProduct, removeProduct };
