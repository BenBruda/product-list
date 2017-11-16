// @flow
import type { RemoveProductAction } from './types';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

function removeProduct(id: number): RemoveProductAction {
  return {
    type: REMOVE_PRODUCT,
    id
  };
}

export { removeProduct };
