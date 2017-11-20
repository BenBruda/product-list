import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  let container;
  beforeEach(() => {
    container = mount(<Search />);
  });
  it('search input renders', () => {
    const searchInput = container.find('input.search');

    expect(searchInput.length).toEqual(1);
  });
  it('onChange search input calls search action with value', () => {
    //   const searchInput = container.find('input.search');
    //   searchInput.instance().value = 'test';
    //   searchInput.simulate('change');
    //   //
  });
});
