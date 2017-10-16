// @flow
import * as React from 'react';
import '../css/App.css';
import ProductList from './ProductList';

type Props = {};
type State = {
  products: Array<{ id: number, name: string, description: string }>
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super();

    this.state = {
      products: [
        {
          id: 1,
          name: 'product 1',
          description: 'the description of the first object'
        },
        {
          id: 2,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 3,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 4,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 5,
          name: 'product 1',
          description: 'the description of the first object'
        },
        {
          id: 6,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 7,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 8,
          name: 'product 1',
          description: 'the description of the first object'
        },
        {
          id: 9,
          name: 'product 2',
          description: 'the description of the first object'
        },
        {
          id: 10,
          name: 'product 2',
          description: 'the description of the first object'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header" />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
