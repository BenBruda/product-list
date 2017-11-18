// @flow
import * as React from 'react';

import type { Product } from '../types';

type Props = {
  products: Array<Product>,
  removeProduct: Function,
  selectProduct: Function
};

const ProductList = (props: Props) => {
  const { selectProduct, removeProduct } = props;
  return (
    <div className="card-list">
      {props.products.map((product, index) => {
        return (
          <div
            onClick={() => selectProduct(product)}
            className="card-wraper"
            key={index}
          >
            <div className="card">
              <div className="img-wrap">
                <div className="img-inner">
                  <img src={product.url} alt="" />
                </div>
              </div>
              <div
                className="delete-button"
                onClick={e => {
                  e.stopPropagation();
                  removeProduct(product);
                }}
              >
                <img
                  className="img-delete-button"
                  src={require('../../imgs/recycle-bin.svg')}
                  alt="X"
                />
              </div>
              <div className="desc-wrap">
                <h3>{product.name} </h3>
                <div className="scrollbarsContainer">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ProductList;
