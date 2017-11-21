// @flow
import * as React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProductList from '../ProductList';
import Modal from '../Modal';
import Notification from '../Notification';
import Header from '../Header';

type Props = {
  isShowingModal: boolean,
  isShowingNotification: boolean
};

const App = (props: Props) => {
  const { isShowingModal, isShowingNotification } = props;
  const notification = (
    <ReactCSSTransitionGroup
      transitionName="notification"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {isShowingNotification && <Notification />}
    </ReactCSSTransitionGroup>
  );
  const modal = isShowingModal && <Modal />;
  return (
    <div className="app">
      <Header />
      <ProductList />
      {modal}
      {notification}
    </div>
  );
};

export default App;
