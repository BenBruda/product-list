// @flow
import { REMOVE_PRODUCT, SELECT_PRODUCT } from './ProductList/actions.js';
import { SEARCH_PRODUCT, SHOW_MODAL } from './Header/actions.js';
import { ADD_PRODUCT, UPDATE_PRODUCT, HIDE_MODAL } from './Modal/actions.js';
import { HIDE_NOTIFICATION } from './Notification/actions.js';

import { INITIAL_PRODUCTS } from './constants';
import type { StoreState, Action, Product } from './types';

export const initState = () => {
  return {
    products: INITIAL_PRODUCTS,
    searchText: '',
    isShowingModal: false,
    isShowingNotification: false,
    notificationText: '',
    selectedProduct: {}
  };
};

const rootReducer = (
  state: StoreState = initState(),
  action: Action
): StoreState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
        isShowingModal: false,
        isShowingNotification: true,
        notificationText: `Item ${action.product.name} was added`,
        products: [...state.products, action.product]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        isShowingNotification: true,
        notificationText: `Item ${action.product.name} was deleted`,
        products: state.products.filter(
          product => product.id !== action.product.id
        )
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        selectedProduct: {},
        isShowingModal: false,
        isShowingNotification: true,
        notificationText: `Item ${action.product.name} was updated`,
        products: state.products.map(
          product =>
            product.id === action.product.id ? action.product : product
        )
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        searchText: action.text
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        isShowingModal: true,
        selectedProduct: action.product
      };
    case SHOW_MODAL:
      return {
        ...state,
        isShowingModal: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShowingModal: false,
        selectedProduct: {}
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        isShowingNotification: false
      };
    default:
      return state;
  }
};

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

export const getIsShowingModal = (state: StoreState): string =>
  state.isShowingModal;
export const getIsShowingNotification = (state: StoreState): string =>
  state.isShowingNotification;
export const getNotificationText = (state: StoreState): string =>
  state.notificationText;
export const getSelectedProduct = (state: StoreState): string =>
  state.selectedProduct;

export default rootReducer;
