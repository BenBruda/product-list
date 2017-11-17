// @flow

import type {
  RemoveProductAction,
  SelectProductAction,
  Product
} from '../types';
import { showNotification } from '../Modal/actions';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const removeProductBase = (id: number): RemoveProductAction => {
  return {
    type: REMOVE_PRODUCT,
    id
  };
};

export const selectProduct = (product: Product): SelectProductAction => {
  return {
    type: SELECT_PRODUCT,
    product
  };
};

export const removeProduct = (product: Product): RemoveProductAction => {
  return dispatch => {
    dispatch(removeProductBase(product.id));
    dispatch(showNotification(`Item ${product.name} was removed`));
  };
};
