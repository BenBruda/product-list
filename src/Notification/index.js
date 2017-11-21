import Notification from './Notification';
import * as actions from './actions';
import { connect } from 'react-redux';
import { getNotificationText } from '../reducer';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  notificationText: getNotificationText(state)
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
