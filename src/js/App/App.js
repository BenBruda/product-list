// @flow
import * as React from 'react';
import '../../css/App.css';

import ProductList from '../ProductList';
import Modal from '../Modal';
import Notification from '../Notification';
import Header from '../Header';

type Props = {
  showModal: boolean,
  showNotification: boolean
};

function App(props: Props) {
  const { showModal, showNotification } = props;
  return (
    <div className="app">
      <Header />
      <ProductList />
      {showModal && <Modal />}
      {showNotification && <Notification />}
    </div>
  );
}

export default App;
