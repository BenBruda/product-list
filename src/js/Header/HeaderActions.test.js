import { search, showModal } from  './actions'

describe('Action creators',()=>{
  it('search', () => {
    const searchActionCreator = search('6 roo')
    expect(searchActionCreator).toEqual({type:"SEARCH_PRODUCT",text:'6 roo'})
  });
  it('showModal', () => {
    const showModalActionCreator = showModal()
    expect(showModalActionCreator).toEqual({type:"SHOW_MODAL"})
  });
});