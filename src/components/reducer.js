// @flow
import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from './actions.js';
import type { StoreState, Action, Product } from './types';

function initState() {
  return {
    products: [
      {
        id: 1,
        name: 'product 1',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 2,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 3,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 4,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 5,
        name: 'product 1',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 6,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 7,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 8,
        name: 'product 1',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 9,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      },
      {
        id: 10,
        name: 'product 2',
        description: 'the description of the first object',
        url: 'https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg'
      }
    ],
    searchText: ''
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
        searchText: action.text
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
