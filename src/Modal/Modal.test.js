import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedModal from './index';
import Modal from './Modal';
import { hideModal, updateProduct, addProduct } from './actions';

import configureStore from 'redux-mock-store';

describe('ConnectedModal', () => {
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
        <ConnectedModal />
      </Provider>
    );
  });
  it('renders the Modal unconnected', () => {
    const modal = container.find(Modal);
    expect(modal.length).toEqual(1);
  });
  it('dispatches hideModal updateProduct and addProduct', () => {
    let action;
    store.dispatch(hideModal());
    const updatedProduct = { description: 'first descript' };
    store.dispatch(updateProduct(updatedProduct));
    const createdproduct = { description: 'first descript', title: 'Prod 1' };
    store.dispatch(addProduct(createdproduct));

    action = store.getActions();
    expect(action[0].type).toBe('HIDE_MODAL');
    expect(action[1].type).toBe('UPDATE_PRODUCT');
    expect(action[1].product).toEqual({ description: 'first descript' });
    expect(action[2].type).toBe('ADD_PRODUCT');
    // remove id made by CUID
    delete action[2].product['id'];
    expect(action[2].product).toEqual(createdproduct);
  });
  it('name, description, url inputs renders', () => {
    const nameInput = container.find('.name');
    const descriptionInput = container.find('.description');
    const urlInput = container.find('.url');

    expect(nameInput.length).toEqual(1);
    expect(descriptionInput.length).toEqual(1);
    expect(urlInput.length).toEqual(1);
  });
  it('name, description, url inputs set the state on change', () => {
    const modal = container.find(Modal);
    const nameInput = container.find('.name');
    nameInput.instance().value = 'name test';
    nameInput.simulate('change');

    const descriptionInput = container.find('.description');
    descriptionInput.instance().value = 'descr test';
    descriptionInput.simulate('change');

    const urlInput = container.find('.url');
    urlInput.instance().value = 'https://tot';
    urlInput.simulate('change');

    const state = modal.instance().state;
    expect(state).toEqual({
      url: 'https://tot',
      description: 'descr test',
      name: 'name test'
    });
  });
});

describe('UnconnectedModal', () => {
  it('On save calls addProduct if selectedProduct is empty', () => {
    const addProductSpy = jest.fn();
    const updateProductSpy = jest.fn();
    const product = {};
    const container = shallow(
      <Modal
        addProduct={addProductSpy}
        updateProduct={updateProductSpy}
        selectedProduct={product}
      />
    );
    const saveProductButton = container.find('.save-button');
    saveProductButton.simulate('click');
    expect(addProductSpy).toBeCalled();
  });
  it('On save calls updateProduct if selectedProduct was passed', () => {
    const addProductSpy = jest.fn();
    const updateProductSpy = jest.fn();
    const product = { description: 'Big house', id: '123D' };
    const container = shallow(
      <Modal
        addProduct={addProductSpy}
        updateProduct={updateProductSpy}
        selectedProduct={product}
      />
    );
    const saveProductButton = container.find('.save-button');
    saveProductButton.simulate('click');
    expect(updateProductSpy).toBeCalled();
  });
});
