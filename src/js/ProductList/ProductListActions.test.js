import { selectProduct, removeProduct } from  './actions'

describe('Action creators',()=>{
  let product
  beforeEach(()=>{
    product = {
      id: 3,
      name:'Rooms Available in North Hill',
      description:'This is beautiful period house.',
      url:'https://s.iha.com/7150000022134/'
    } 
  })
  it('selectProduct', () => {
    const selectProductAction = selectProduct(product)
    expect(selectProductAction).toEqual({type:"SELECT_PRODUCT", product})
  });
  it('removeProduct', () => {
    const removeProductAction = removeProduct(product)
    expect(removeProductAction).toEqual({type:"REMOVE_PRODUCT", product})
  })
});