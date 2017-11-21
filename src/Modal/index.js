import Modal from './Modal';
import * as actions from './actions';
import { connect } from 'react-redux';
import { getSelectedProduct } from '../reducer';


const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  selectedProduct: getSelectedProduct(state)
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
