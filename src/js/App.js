// @flow
import * as React from 'react';
import '../css/App.css';

import type { Product } from './types';

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
  constructor(props: Props) {
    super(props);
    this.state = {
      showModal: false,
      selectedProduct: {}
    };
  }
  render() {
    const { showModal, selectedProduct } = this.state;
    return (
      <div className="App">
        <Header onAdd={() => this.setState({ showModal: true })} />
        <ProductList
          selectProduct={product =>
            this.setState({ showModal: true, selectedProduct: product })}
        />
        {showModal && (
          <Modal
            onClose={() =>
              this.setState({ showModal: false, selectedProduct: {} })}
            selectedProduct={selectedProduct}
          />
        )}
      </div>
    );
  }
}

export default App;
