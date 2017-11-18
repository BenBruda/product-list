import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedApp from './index';
import App from './App';
import Header from '../Header';
import Modal from '../Modal';
import Notification from '../Notification';

import configureStore from 'redux-mock-store'

describe('ConnectedApp initial state', () => {
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
      container = mount(<Provider store={store}><ConnectedApp  /></Provider> )  
  })
  it('renders the App unconnected', () => {
    const app = container.find(App)
    expect(app.length).toEqual(1)
  
  });

  it('renders a Header', () => {
    const header = container.find(Header)
    expect(header.length).toEqual(1)
  });

  it('does not render a  Modal', () => {
    const header = container.find(Modal)
    expect(header.length).toEqual(0)
  })
  it('does not render a Notification', () => {
    const header = container.find(Notification)
    expect(header.length).toEqual(0)
  })
});

describe('ConnectedApp isShowingModal true', () => {
  const initialState = {
    products:[],
    searchText: '',
    notificationText: '',
    selectedProduct: {},
    isShowingModal: true,
    isShowingNotification: false
  }
  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
      store = mockStore(initialState)
      container = mount(<Provider store={store}><ConnectedApp  /></Provider> )  
  })

  it('renders a Modal', () => {
    const header = container.find(Modal)
    expect(header.length).toEqual(1)
  })
  it('does not render a Notification', () => {
    const header = container.find(Notification)
    expect(header.length).toEqual(0)
  })
});
describe('ConnectedApp isShowingNotification true', () => {
  const initialState = {
    products:[],
    searchText: '',
    notificationText: '',
    selectedProduct: {},
    isShowingModal: false,
    isShowingNotification: true
  }
  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
      store = mockStore(initialState)
      container = mount(<Provider store={store}><ConnectedApp  /></Provider> )  
  })

  it('renders a  Modal', () => {
    const header = container.find(Modal)
    expect(header.length).toEqual(0)
  })
  it('does not render a Notification', () => {
    const header = container.find(Notification)
    expect(header.length).toEqual(1)
  })
});