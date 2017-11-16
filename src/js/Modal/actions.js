// @flow

import type { Product, AddProductAction, UpdateProductAction } from '../types';
import cuid from 'cuid';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const updateProduct = (product: Product): UpdateProductAction => {
  return {
    type: UPDATE_PRODUCT,
    product
  };
};

export const addProduct = (product: Product): AddProductAction => {
  return {
    type: ADD_PRODUCT,
    product: { ...product, id: cuid() }
  };
};
