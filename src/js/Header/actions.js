// @flow

import type SearchProductAction from '../types';

export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SHOW_MODAL = 'SHOW_MODAL';

export const search = (text: string): SearchProductAction => {
  return {
    type: SEARCH_PRODUCT,
    text
  };
};

export const showModal = (): SearchProductAction => {
  return {
    type: SHOW_MODAL
  };
};
