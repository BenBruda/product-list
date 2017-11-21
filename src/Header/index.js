import { connect } from 'react-redux';

import Header from './Header';
import * as actions from './actions';

const mapDispatchToProps = {
  ...actions
};

export default connect(null, mapDispatchToProps)(Header);
