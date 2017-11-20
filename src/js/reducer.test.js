import reducer, { initState } from './reducer';
import { REMOVE_PRODUCT, SELECT_PRODUCT } from './ProductList/actions.js';
import { SEARCH_PRODUCT, SHOW_MODAL } from './Header/actions.js';
import { ADD_PRODUCT, UPDATE_PRODUCT, HIDE_MODAL } from './Modal/actions.js';
import { HIDE_NOTIFICATION } from './Notification/actions.js';
// import * as actions from '../actions/posts/getPost';

describe('reducer', () => {
  let state;
  beforeEach(() => {
    state = initState();
  });

  it('should return the initial state', () => {
    expect(reducer(state, {})).toEqual(state);
  });
  it('should handle ADD_PRODUCT', () => {
    const initialState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [{ name: 'Nice studio', description: 'ideal for students' }],
      searchText: '',
      notificationText: 'Item Nice studio was added',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: true
    };
    const addProductAction = {
      type: ADD_PRODUCT,
      product: { name: 'Nice studio', description: 'ideal for students' }
    };
    expect(reducer(initialState, addProductAction)).toEqual(finalState);
  });
  it('should handle REMOVE_PRODUCT', () => {
    const initialState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' },
        { name: 'Big House', description: 'ideal for family', id: '123c' }
      ],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' }
      ],
      searchText: '',
      notificationText: 'Item Big House was deleted',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: true
    };
    const removeProductAction = {
      type: REMOVE_PRODUCT,
      product: {
        name: 'Big House',
        description: 'ideal for family',
        id: '123c'
      }
    };
    expect(reducer(initialState, removeProductAction)).toEqual(finalState);
  });
  it('should handle UPDATE_PRODUCT', () => {
    const initialState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' },
        {
          name: 'Big House',
          description: 'ideal for family width pet',
          id: '123c'
        }
      ],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' },
        {
          name: 'Big House',
          description: 'ideal for family width pet',
          id: '123c'
        }
      ],
      searchText: '',
      notificationText: 'Item Big House was updated',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: true
    };
    const updateProductAction = {
      type: UPDATE_PRODUCT,
      product: {
        name: 'Big House',
        description: 'ideal for family width pet',
        id: '123c'
      }
    };
    expect(reducer(initialState, updateProductAction)).toEqual(finalState);
  });
  it('should handle SEARCH_PRODUCT', () => {
    const initialState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [],
      searchText: 'big h',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const searchProductAction = {
      type: SEARCH_PRODUCT,
      text: 'big h'
    };
    expect(reducer(initialState, searchProductAction)).toEqual(finalState);
  });
  it('should handle SELECT_PRODUCT', () => {
    const initialState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' },
        {
          name: 'Big House',
          description: 'ideal for family width pet',
          id: '123c'
        }
      ],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [
        { name: 'Nice studio', description: 'ideal for students', id: '1234d' },
        {
          name: 'Big House',
          description: 'ideal for family width pet',
          id: '123c'
        }
      ],
      searchText: '',
      notificationText: '',
      selectedProduct: {
        name: 'Big House',
        description: 'ideal for family width pet',
        id: '123c'
      },
      isShowingModal: true,
      isShowingNotification: false
    };
    const selectProductAction = {
      type: SELECT_PRODUCT,
      product: {
        name: 'Big House',
        description: 'ideal for family width pet',
        id: '123c'
      }
    };
    expect(reducer(initialState, selectProductAction)).toEqual(finalState);
  });
  it('should handle SHOW_MODAL', () => {
    const initialState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const finalState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: true,
      isShowingNotification: false
    };
    const showModalAction = {
      type: SHOW_MODAL
    };
    expect(reducer(initialState, showModalAction)).toEqual(finalState);
  });
  it('should handle HIDE_MODAL', () => {
    const initialState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: true,
      isShowingNotification: false
    };
    const finalState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const hideModalAction = {
      type: HIDE_MODAL
    };
    expect(reducer(initialState, hideModalAction)).toEqual(finalState);
  });
  it('should handle HIDE_NOTIFICATION', () => {
    const initialState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: true
    };
    const finalState = {
      products: [],
      searchText: '',
      notificationText: '',
      selectedProduct: {},
      isShowingModal: false,
      isShowingNotification: false
    };
    const hideNotificatonAction = {
      type: HIDE_NOTIFICATION
    };
    expect(reducer(initialState, hideNotificatonAction)).toEqual(finalState);
  });
});
