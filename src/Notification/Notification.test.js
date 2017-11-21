import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ConnectedNotification from './index';
import Notification from './Notification';
import { hideNotification } from './actions';

describe('ConnectedNotification', () => {
  const initialState = {
    products: [],
    searchText: '',
    notificationText: 'here we go',
    selectedProduct: {},
    isShowingModal: false,
    isShowingNotification: false
  };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <ConnectedNotification />
      </Provider>
    );
  });
  it('renders the Notification unconnected', () => {
    const notification = container.find(Notification);
    expect(notification.length).toEqual(1);
  });
  it('dispatches hideNotification', () => {
    let action;
    store.dispatch(hideNotification());
    action = store.getActions();
    expect(action[0].type).toBe('HIDE_NOTIFICATION');
  });
  it('displays the notification text', () => {
    const notificationSpan = container.find('span.notification-text');
    expect(notificationSpan.text()).toEqual(initialState.notificationText);
  });
});

describe('UnconnectedNotification', () => {
  it('when .wrap-close-notif clicked hideNotification is called', () => {
    const hideNotificationSpy = jest.fn();
    const container = shallow(
      <Notification hideNotification={hideNotificationSpy} />
    );
    const hideNotificationButton = container.find('.wrap-close-notif');
    hideNotificationButton.simulate('click');
    expect(hideNotificationSpy).toBeCalled();
  });
});
