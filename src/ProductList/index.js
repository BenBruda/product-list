import ProductList from './ProductList';
import * as actions from './actions';
import { connect } from 'react-redux';
import { getSearchedProducts } from '../reducer';

const mapStateToProps = (state: StoreState): { products: Array<Product> } => ({
  products: getSearchedProducts(state)
});

const mapDispatchToProps = {
  ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
