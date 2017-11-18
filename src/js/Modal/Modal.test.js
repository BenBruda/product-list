import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedModal from './index';
import Modal from './Modal';
import { hideModal, updateProduct, addProduct } from  './actions'


import configureStore from 'redux-mock-store'

describe('ConnectedModal', () => {
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
    container = mount(<Provider store={store}><ConnectedModal  /></Provider> )  
  })
  it('renders the Modal unconnected', () => {
    const modal = container.find(Modal)
    expect(modal.length).toEqual(1)
  });
  it('dispatches hideModal updateProduct and addProduct', () => {
    let action
    store.dispatch(hideModal())
    const updatedProduct = {description:'first descript'}
    store.dispatch(updateProduct(updatedProduct))
    const createdproduct = {description:'first descript',title:'Prod 1'}
    store.dispatch(addProduct(createdproduct))

    action = store.getActions()
    expect(action[0].type).toBe("HIDE_MODAL")
    expect(action[1].type).toBe("UPDATE_PRODUCT")
    expect(action[1].product).toBe(updatedProduct)
    expect(action[2].type).toBe("ADD_PRODUCT")
    // expect(action[2].product).toBe(createdproduct)
  });
  it('name, description, url inputs renders', () => {
    const nameInput = container.find('.name')
    const descriptionInput = container.find('.description')
    const urlInput = container.find('.url')

    expect(nameInput.length).toEqual(1)
    expect(descriptionInput.length).toEqual(1)
    expect(descriptionInput.length).toEqual(1)
	})
	it('name, description, url inputs set the state on change', () => {
    const modal = container.find(Modal)
		const nameInput = container.find('.name')
    nameInput.instance().value='name test'
    nameInput.simulate('change')

    const descriptionInput = container.find('.description');
    descriptionInput.instance().value='descr test';
    descriptionInput.simulate('change');

    const urlInput = container.find('.url');
    urlInput.instance().value='https://tot';
    urlInput.simulate('change');

    const state = modal.instance().state
    expect(state).toEqual({url:'https://tot', description:'descr test', name:'name test' })

	})
	// it('when .save-button clicked onSave is called', () => {
  //   const modal = container.find(Modal)
  //   modal.instance().onSave = jest.fn();
  //   // container.update();
	// 	const saveProductButton = modal.find('.save-button');
  //   saveProductButton.simulate('click');
    
  //   expect(modal.instance().onSave).toBeCalled()
  
	// })

});