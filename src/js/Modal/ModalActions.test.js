import { updateProduct, addProduct, hideModal } from  './actions'

describe('Action creators',()=>{
  it('updateProduct', () => {
    const updateProductAction = updateProduct({description:'nice house'})
    expect(updateProductAction).toEqual({type:"UPDATE_PRODUCT", product:{description:'nice house'}})
  });
  it('createProduct', () => {
    const updateProductAction = updateProduct({name:'2 badrooms', description:'old house'})
    expect(updateProductAction).toEqual({type:"UPDATE_PRODUCT", product:{name:'2 badrooms', description:'old house'}})
  });
  it('hideModal', () => {
    const hideModalAction = hideModal()
    expect(hideModalAction).toEqual({type:"HIDE_MODAL"})
  });
});