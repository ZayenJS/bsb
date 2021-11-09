import { MailStatus } from '../../models';
import { GlobalActions, GlobalActionsEnum } from '../actions';
import { ContactActions, ContactActionsEnum } from '../actions/contact';

export interface FieldType {
  value: string;
  touched: boolean;
}

interface Fields {
  firstName: FieldType;
  lastName: FieldType;
  email: FieldType;
  message: FieldType;
}

export interface ContactReducerState {
  firstName: FieldType;
  lastName: FieldType;
  email: FieldType;
  message: FieldType;
  mailStatus: MailStatus;
  notification: string;
}

const INITIAL_STATE: ContactReducerState = {
  firstName: { value: '', touched: false },
  lastName: { value: '', touched: false },
  email: { value: '', touched: false },
  message: { value: '', touched: false },
  mailStatus: MailStatus.NOT_SENT,
  notification: '',
};

const reducer = (
  state: ContactReducerState = INITIAL_STATE,
  action: GlobalActions | ContactActions,
): ContactReducerState => {
  switch (action.type) {
    case GlobalActionsEnum.CHANGE_VALUE: {
      if (action.payload.reducerName === 'contact') {
        const name = action.payload.name as keyof Fields;

        return {
          ...state,
          [name]: {
            ...state[name],
            value: action.payload.value,
          },
        };
      }

      return state;
    }
    case GlobalActionsEnum.FIELD_TOUCHED: {
      if (action.payload.reducerName === 'contact') {
        const name = action.payload.name as keyof Fields;

        return {
          ...state,
          [name]: {
            ...state[name],
            touched: true,
          },
        };
      }

      return state;
    }
    case ContactActionsEnum.SEND_MAIL: {
      const { apiResponse } = action.payload;

      if (apiResponse) {
        return {
          ...state,
          notification: apiResponse.message,
          mailStatus: apiResponse.isSent ? MailStatus.SENT : MailStatus.ERROR,
        };
      }

      return state;
    }
    case ContactActionsEnum.RESET_MAIL: {
      return {
        ...state,
        mailStatus: MailStatus.NOT_SENT,
        notification: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
