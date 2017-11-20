// @flow
import * as React from 'react';

import type {
  Product,
  RemoveProductAction,
  SelectProductAction
} from '../types';

type Props = {
  product: Product,
  removeProduct: (product: Product) => RemoveProductAction,
  selectProduct: (product: Product) => SelectProductAction
};

const Card = (props: Props) => {
  const { product, removeProduct, selectProduct } = props;
  return (
    <div onClick={() => selectProduct(product)} className="card-wrapper">
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
};

export default Card;
