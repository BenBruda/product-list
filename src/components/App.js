// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/App.css';

import { removeProduct, addProduct } from './actions';

import type { StoreState, Product } from './types';

import ProductList from './ProductList';
import Modal from './Modal';

type Props = {
  products: Array<Product>,
  actions: {
    removeProduct: (index: number) => void,
    addProduct: (index: number) => void
  }
};
type State = {
  showModal: boolean
};
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }
  onSave = (product: Product) => {
    this.props.actions.addProduct(product);
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <div className="header" />
        <div onClick={() => this.setState({ showModal: true })}>
          {' '}
          add new product +{' '}
        </div>
        <ProductList
          products={this.props.products}
          removeProduct={this.props.actions.removeProduct}
        />
        {showModal && (
          <Modal
            onClose={() => this.setState({ showModal: false })}
            onSave={this.onSave}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state: StoreState): { products: Array<Product> } {
  return { products: state.products };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ removeProduct, addProduct }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
