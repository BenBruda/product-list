import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import ConnectedNotification from './index';
import Notification from './Notification';
import {  hideNotification } from  './actions'



describe('ConnectedNotification', () => {
  const initialState = {
    products:[],
    searchText: '',
    notificationText: '',
    selectedProduct: {},
    isShowingModal: false,
    isShowingNotification: false
  }
  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
    store = mockStore(initialState)
    container = mount(<Provider store={store}><ConnectedNotification /></Provider> )  
  })
  it('renders the Notification unconnected', () => {
    const notification = container.find(Notification)
    expect(notification.length).toEqual(1)
  });
  it('dispatches hideNotification', () => {
    let action
    store.dispatch(hideNotification())
    action = store.getActions()
    expect(action[0].type).toBe("HIDE_NOTIFICATION")

  });
  // it('search input renders', () => {
  //     const searchInput = container.find('input.search')

  //     expect(searchInput.length).toEqual(1)
  // })
  // it('onChange search input calls search action with value', () => {
  //     let action
  //     const searchInput = container.find('input.search')
  //     searchInput.instance().value='test'
  //     searchInput.simulate('change')
  //     action = store.getActions()
  //     expect(action[0].type).toBe("SEARCH_PRODUCT")
  //     expect(action[0].text).toBe("test")
  // })
  // it('when .add-product clicked showModal is called', () => {
  //     let action
  //     const newProductButton = container.find('.add-product')
  //     newProductButton.simulate('click')
  //     action = store.getActions()
  //     expect(action[0].type).toBe("SHOW_MODAL")
  // })

});