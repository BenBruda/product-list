// @flow

import type {
  Product,
  AddProductAction,
  UpdateProductAction,
  HideModalAction
} from '../types';
import cuid from 'cuid';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const HIDE_MODAL = 'HIDE_MODAL';


export const addProduct = (product: Product): AddProductAction => {
  return {
    type: ADD_PRODUCT,
    product: { ...product, id: cuid() }
  };
};

export const updateProduct = (product: Product): UpdateProductAction => {
  return {
    type: UPDATE_PRODUCT,
    product
  };
};

export const hideModal = (): HideModalAction => {
  return {
    type: HIDE_MODAL
  };
};
