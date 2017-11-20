import { search, showModal } from './actions';

describe('Action creators', () => {
  it('search', () => {
    const searchAction = search('6 roo');
    expect(searchAction).toEqual({ type: 'SEARCH_PRODUCT', text: '6 roo' });
  });
  it('showModal', () => {
    const showModalAction = showModal();
    expect(showModalAction).toEqual({ type: 'SHOW_MODAL' });
  });
});
