// @flow

import type {
  Product,
  AddProductAction,
  UpdateProductAction,
  HideAction
} from '../types';
import cuid from 'cuid';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const HIDE_MODAL = 'HIDE_MODAL';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const updateProductBase = (product: Product): UpdateProductAction => {
  return {
    type: UPDATE_PRODUCT,
    product
  };
};

export const addProductBase = (product: Product): AddProductAction => {
  return {
    type: ADD_PRODUCT,
    product: { ...product, id: cuid() }
  };
};

export const hideModal = (): HideAction => {
  return {
    type: HIDE_MODAL
  };
};

export const showNotification = (text: string): HideAction => {
  return {
    type: SHOW_NOTIFICATION,
    text
  };
};

export const addProduct = (product: Product): AddProductAction => {
  return dispatch => {
    dispatch(showNotification(`Product ${product.name} added`));
    dispatch(addProductBase(product));
  };
};

export const updateProduct = (product: Product): AddProductAction => {
  return dispatch => {
    dispatch(showNotification(`Product ${product.name} updated`));
    dispatch(updateProductBase(product));
  };
};
