import { createStore } from 'redux';

import rootReducer from './reducer.js';

const store: State = createStore(rootReducer);

export default store;
