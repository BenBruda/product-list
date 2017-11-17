// @flow
import { REMOVE_PRODUCT, SELECT_PRODUCT } from './ProductList/actions.js';
import { SEARCH_PRODUCT, SHOW_MODAL } from './Header/actions.js';
import { ADD_PRODUCT, UPDATE_PRODUCT, HIDE_MODAL } from './Modal/actions.js';
import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION
} from './Notification/actions.js';

import { INITIAL_PRODUCTS } from './constants';
import type { StoreState, Action, Product } from './types';

function initState() {
  return {
    products: INITIAL_PRODUCTS,
    searchText: '',
    showModal: false,
    showNotification: true,
    notificationText: 'here is first',
    selectedProduct: {}
  };
}

function rootReducer(
  state: StoreState = initState(),
  action: Action
): StoreState {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
        showModal: false,
        products: [...state.products, action.product]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        showModal: false,
        searchText: action.text
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
        showModal: false,
        products: state.products.map(
          product =>
            product.id === action.product.id ? action.product : product
        )
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        selectedProduct: {}
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        showModal: true,
        selectedProduct: action.product
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        showNotification: false
      };
    case SHOW_NOTIFICATION:
      return {
        ...state,
        showNotification: true,
        notificationText: action.text
      };
    default:
      return state;
  }
}

export const getSearchedProducts = (state: StoreState): Array<Product> => {
  const { products, searchText } = state;
  let searchedProducts;
  if (searchText !== '') {
    searchedProducts = products.filter(product => {
      const { name, description } = product;
      return description.includes(searchText) || name.includes(searchText);
    });
  } else {
    searchedProducts = products;
  }

  return searchedProducts;
};

export default rootReducer;
