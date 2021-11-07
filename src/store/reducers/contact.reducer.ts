import { GlobalActions, GlobalActionsEnum } from '../actions';

export interface ContactReducerState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const INITIAL_STATE: ContactReducerState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const reducer = (
  state: ContactReducerState = INITIAL_STATE,
  action: GlobalActions,
): ContactReducerState => {
  switch (action.type) {
    case GlobalActionsEnum.CHANGE_VALUE:
      if (action.payload.reducerName === 'contact') {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }

      return state;
    default:
      return state;
  }
};

export default reducer;
