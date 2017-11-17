import Notification from './Notification';
import * as actions from './actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  notificationText: state.notificationText
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
