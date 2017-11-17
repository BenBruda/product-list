// @flow
import * as React from 'react';

type Props = {
  notificationText: string,
  hideNotification: Function
};
type State = {};

class Notification extends React.Component<Props, State> {
  componentDidMount() {
    const hideNotification = this.props.hideNotification;
    setTimeout(() => {
      hideNotification();
    }, 4000);
  }
  render() {
    const { notificationText, hideNotification } = this.props;
    return (
      <div className="notification-wrap">
        <div className="notification-body">
          <div onClick={hideNotification} className="wrap-close-notif">
            <img
              className="img-close-notif"
              src={require('../../imgs/cancel-music.svg')}
              alt="X"
            />
          </div>
          <span className="notification-text">{notificationText}</span>
        </div>
      </div>
    );
  }
}

export default Notification;
