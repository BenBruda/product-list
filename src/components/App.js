// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../css/App.css';

import { removeProduct, addProduct, search } from './actions';
import { getSearchedProducts } from './reducer';
import type { StoreState, Product } from './types';

import ProductList from './ProductList';
import Modal from './Modal';
import Header from './Header';

type Props = {
  products: Array<Product>,
  actions: {
    removeProduct: (index: number) => void,
    addProduct: (product: Product) => void,
    search: (text: string) => void
  }
};
type State = {
  showModal: boolean
};
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  onSave = (product: Product) => {
    this.props.actions.addProduct(product);
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Header onSearch={this.props.actions.search} />
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
  return { products: getSearchedProducts(state), nextId: getNextID(state) };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ removeProduct, addProduct, search }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
