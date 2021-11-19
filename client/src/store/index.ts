import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { contact } from './middlewares';
import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true });
const middlewares = applyMiddleware(contact);

let enhancers = composeEnhancers(middlewares);

if (process.env.NODE_ENV === 'production') enhancers = middlewares;

const store = createStore(rootReducer, enhancers);

export default store;
