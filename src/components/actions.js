// @flow
import type {
  Product,
  RemoveProductAction,
  AddProductAction,
  SearchProductAction
} from './types';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

function addProduct(product: Product): AddProductAction {
  return {
    type: ADD_PRODUCT,
    product
  };
}
function removeProduct(id: number): RemoveProductAction {
  return {
    type: REMOVE_PRODUCT,
    id
  };
}
function search(text: string): SearchProductAction {
  return {
    type: SEARCH_PRODUCT,
    text
  };
}

export { addProduct, removeProduct, search };
