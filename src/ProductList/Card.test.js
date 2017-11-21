import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let container;
  beforeEach(() => {
    const product = { description: 'nice house' };
    container = shallow(<Card product={product} />);
  });
  it('renders the delete Button', () => {
    const deleteButton = container.find('.delete-button');
    expect(deleteButton.length).toEqual(1);
  });
  it('calls removePproduct on click delete Button', () => {
    // const deleteButton = container.find('.delete-button');
    // expect(deleteButton.length).toEqual(1);
  });
  it('renders the description', () => {
    // const deleteButton = container.find('.delete-button');
    // expect(deleteButton.length).toEqual(1);
  });
  it('renders the name', () => {
    // const deleteButton = container.find('.delete-button');
    // expect(deleteButton.length).toEqual(1);
  });
  it('renders the picture with uproduct url as src', () => {
    // const deleteButton = container.find('.delete-button');
    // expect(deleteButton.length).toEqual(1);
  });
  it('calls select product on click', () => {
    // const deleteButton = container.find('.delete-button');
    // expect(deleteButton.length).toEqual(1);
  });
});
