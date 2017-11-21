import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let container, removeProductSpy, selectProductSpy, product;
  beforeEach(() => {
    removeProductSpy = jest.fn();
    selectProductSpy = jest.fn();
    product = {
      description: 'nice house',
      name: 'house test',
      url: 'https://www.yo',
      id: '123'
    };
    container = shallow(
      <Card
        product={product}
        removeProduct={removeProductSpy}
        selectProduct={selectProductSpy}
      />
    );
  });
  it('renders the delete Button', () => {
    const deleteButton = container.find('.delete-button');
    expect(deleteButton.length).toEqual(1);
  });
  it('calls removeProduct pasing the product on click delete Button', () => {
    const deleteButton = container.find('.delete-button');
    deleteButton.simulate('click');
    expect(removeProductSpy).toBeCalledWith(product);
  });
  it('calls selectProduct on click', () => {
    container.simulate('click');
    expect(selectProductSpy).toBeCalledWith(product);
  });
  it('renders the description', () => {
    const name = container.find('h3');
    expect(name.text()).toEqual(product.name);
  });
  it('renders the name', () => {
    const description = container.find('p');
    expect(description.text()).toEqual(product.description);
  });
  it('renders the picture with product url as src', () => {
    const img = container.find('#product-img');
    expect(img.prop('src')).toEqual(product.url);
  });
});
