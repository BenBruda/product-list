// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeProduct } from './actions';
type Props = {
  products: Array<{ id: number, name: string, description: string }>,
  actions: any
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
                    <img
                      src="https://c1.staticflickr.com/6/5281/5312627175_07aeca58ea_b.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h2 onClick={() => this.props.actions.removeProduct(index)}>
                  delete
                </h2>
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

function mapStateToProps(state) {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ removeProduct }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
