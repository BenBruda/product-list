// @flow
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions.js';
import type { State, Action } from './types';

function initState() {
  return {
    products: [
      {
        id: 1,
        name: 'product 1',
        description: 'the description of the first object'
      },
      {
        id: 2,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 3,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 4,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 5,
        name: 'product 1',
        description: 'the description of the first object'
      },
      {
        id: 6,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 7,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 8,
        name: 'product 1',
        description: 'the description of the first object'
      },
      {
        id: 9,
        name: 'product 2',
        description: 'the description of the first object'
      },
      {
        id: 10,
        name: 'product 2',
        description: 'the description of the first object'
      }
    ]
  };
}

function rootReducer(state: State = initState(), action: Action): State {
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
