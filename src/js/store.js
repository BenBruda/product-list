import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer.js';

const devToolsExtension = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devToolsExtension)
);
export default store;
