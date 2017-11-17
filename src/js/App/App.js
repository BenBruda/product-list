// @flow
import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
  const notification = (
    <ReactCSSTransitionGroup
      transitionName="notification"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {showNotification && <Notification />}
    </ReactCSSTransitionGroup>
  );
  const modal = showModal && <Modal />;
  return (
    <div className="app">
      <Header />
      <ProductList />
      {modal}
      {notification}
    </div>
  );
}

export default App;
