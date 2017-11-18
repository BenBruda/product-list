import { updateProduct, addProduct, hideModal } from  './actions'

describe('Action creators',()=>{
  it('updateProduct', () => {
    const updateProductActionCreator = updateProduct({description:'nice house'})
    expect(updateProductActionCreator).toEqual({type:"UPDATE_PRODUCT", product:{description:'nice house'}})
  });
  it('createProduct', () => {
    const updateProductActionCreator = updateProduct({name:'2 badrooms', description:'old house'})
    expect(updateProductActionCreator).toEqual({type:"UPDATE_PRODUCT", product:{name:'2 badrooms', description:'old house'}})
  });
  it('hideModal', () => {
    const hideModalActionCreator = hideModal()
    expect(hideModalActionCreator).toEqual({type:"HIDE_MODAL"})
  });
});