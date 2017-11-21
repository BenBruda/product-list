// @flow

import type {
  RemoveProductAction,
  SelectProductAction,
  Product
} from '../types';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const removeProduct = (product: Product): RemoveProductAction => {
  return {
    type: REMOVE_PRODUCT,
    product
  };
};

export const selectProduct = (product: Product): SelectProductAction => {
  return {
    type: SELECT_PRODUCT,
    product
  };
};
