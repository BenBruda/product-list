// @flow

import type SearchProductAction from '../types';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const search = (text: string): SearchProductAction => {
  return {
    type: SEARCH_PRODUCT,
    text
  };
};
