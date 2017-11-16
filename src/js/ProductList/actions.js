// @flow

import type { RemoveProductAction } from '../types';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const removeProduct = (id: number): RemoveProductAction => {
  return {
    type: REMOVE_PRODUCT,
    id
  };
};
