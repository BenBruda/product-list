// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/App.css';

import { removeProduct, addProduct, search, updateProduct } from './actions';
import { getSearchedProducts, getNextID } from './reducer';
import type { StoreState, Product } from './types';

import ProductList from './ProductList';
import Modal from './Modal';
import Header from './Header';

type Props = {
  products: Array<Product>,
  nextId: number,
  actions: {
    removeProduct: (index: number) => void,
    addProduct: (product: Product) => void,
    search: (text: string) => void,
    updateProduct: (product: Product) => void
  }
};
type State = {
  showModal: boolean,
  selectedProduct: Product
};
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProduct: {}
    };
  }
  onSave = (product: Product) => {
    const { addProduct, updateProduct } = this.props.actions;
    if (this.state.selectedProduct.id) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
  };
  render() {
    const { showModal, selectedProduct } = this.state;
    const { products, actions, nextId } = this.props;
    return (
      <div className="App">
        <Header
          onSearch={this.props.actions.search}
          onAdd={() => this.setState({ showModal: true })}
        />
        <ProductList
          products={products}
          removeProduct={actions.removeProduct}
          selectProduct={product =>
            this.setState({ showModal: true, selectedProduct: product })}
        />
        {showModal && (
          <Modal
            onClose={() =>
              this.setState({ showModal: false, selectedProduct: {} })}
            onSave={this.onSave}
            nextId={nextId}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state: StoreState): { products: Array<Product> } {
  return { products: getSearchedProducts(state), nextId: getNextID(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { removeProduct, addProduct, search, updateProduct },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
