import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  showModal: state.showModal,
  showNotification: state.showNotification
});

export default connect(mapStateToProps)(App);
