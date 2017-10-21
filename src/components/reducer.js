// @flow
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions.js';
import type { StoreState, Action } from './types';

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
    ]
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
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;
