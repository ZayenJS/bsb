import { combineReducers } from 'redux';

import contact, { ContactReducerState } from './contact.reducer';
import global, { GlobalReducerState } from './global.reducer';

export interface State {
  contact: ContactReducerState;
  global: GlobalReducerState;
}

const reducer = combineReducers({ contact, global });

export default reducer;
