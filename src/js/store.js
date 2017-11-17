import { createStore, compose } from 'redux';

import rootReducer from './reducer.js';

const devToolsExtension = window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const store = createStore(rootReducer, compose(devToolsExtension));
export default store;
