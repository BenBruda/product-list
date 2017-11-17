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
    }, 5000);
  }
  render() {
    const { notificationText, hideNotification } = this.props;
    return (
      <div className="notification-wrap">
        {notificationText}
        <span onClick={hideNotification}>close</span>
      </div>
    );
  }
}

export default Notification;
