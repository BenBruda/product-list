import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import ConnectedProductList from './index';
import ProductList from './ProductList';
import { selectProduct } from  './actions'
import { INITIAL_PRODUCTS } from '../constants';


describe('ConnectedProductList', () => {
  const initialState = {
    products:INITIAL_PRODUCTS,
    searchText: '',
    notificationText: '',
    selectedProduct: {},
    isShowingModal: false,
    isShowingNotification: false
  }
  const mockStore = configureStore();
  let store,container

  beforeEach(()=>{
    store = mockStore(initialState)
    container = mount(<Provider store={store}><ConnectedProductList /></Provider> )  
  })
  it('renders the ProductList unconnected', () => {
    const notification = container.find(ProductList)
    expect(notification.length).toEqual(1);
  });
  it('dispatches selectProduct', () => {
    let action
    store.dispatch(selectProduct())
    action = store.getActions();
    expect(action[0].type).toBe("SELECT_PRODUCT");
  });
  it('renders a card for each product in list', () => {
    //   const notificationSpan = container.find('.notification-text');
    //   expect(notificationSpan).toEqual(initialState.notificationText);
  })

});