// @flow
import * as React from 'react';
import { Provider } from 'react-redux';

import '../css/App.css';

import ProductList from './ProductList';
import store from './store.js';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="header" />
          <ProductList />
        </div>
      </Provider>
    );
  }
}

export default App;
