import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedHeader from './index';
import Header from './Header';
import { search, showModal } from './actions';

import configureStore from 'redux-mock-store';

describe('ConnectedHeader', () => {
  const initialState = {
    products: [],
    searchText: '',
    notificationText: '',
    selectedProduct: {},
    isShowingModal: false,
    isShowingNotification: false
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedHeader />
      </Provider>
    );
  });
  it('renders the Header unconnected', () => {
    const header = container.find(Header);
    expect(header.length).toEqual(1);
  });
  it('dispatches search and showModal', () => {
    let action;
    store.dispatch(search('exampl'));
    store.dispatch(showModal());
    action = store.getActions();
    expect(action[0].type).toBe('SEARCH_PRODUCT');
    expect(action[0].text).toBe('exampl');
    expect(action[1].type).toBe('SHOW_MODAL');
  });
  it('search input renders', () => {
    const searchInput = container.find('input.search');

    expect(searchInput.length).toEqual(1);
  });
  it('onChange search input calls search action with value', () => {
    let action;
    const searchInput = container.find('input.search');
    searchInput.instance().value = 'test';
    searchInput.simulate('change');
    action = store.getActions();
    expect(action[0].type).toBe('SEARCH_PRODUCT');
    expect(action[0].text).toBe('test');
  });
  it('when .add-product clicked showModal is called', () => {
    let action;
    const newProductButton = container.find('.add-product');
    newProductButton.simulate('click');
    action = store.getActions();
    expect(action[0].type).toBe('SHOW_MODAL');
  });
});
