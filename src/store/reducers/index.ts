import { combineReducers } from 'redux';

import contact, { ContactReducerState } from './contact.reducer';

export interface State {
  contact: ContactReducerState;
}

const reducer = combineReducers({ contact });

export default reducer;
