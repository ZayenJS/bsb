import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { contact } from './middlewares';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true });
const enhancers = composeEnhancers(applyMiddleware(contact));

const store = createStore(rootReducer, enhancers);

export default store;
