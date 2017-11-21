import App from './App';
import { connect } from 'react-redux';
import { getIsShowingModal, getIsShowingNotification } from '../reducer';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  isShowingModal: getIsShowingModal(state),
  isShowingNotification: getIsShowingNotification(state)
});

export default connect(mapStateToProps)(App);
