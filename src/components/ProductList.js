// @flow
import * as React from 'react';

import type { Product } from './types';

type Props = {
  products: Array<Product>,
  removeProduct: Function
};

class ProductList extends React.Component<Props> {
  render() {
    return (
      <div className="card-list">
        {this.props.products.map((product, index) => {
          return (
            <div className="cardWraper" key={index}>
              <div className="card">
                <div className="img-wrap">
                  <div className="img-inner">
                    <img  src={product.url} alt="" />
                  </div>
                </div>
                <h2 onClick={() => this.props.removeProduct(index)}>delete</h2>
                <h3>{product.name} </h3>
                <span>{product.description} </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
