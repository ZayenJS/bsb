import { MiddlewareAPI, Dispatch } from 'redux';
import axios from '../../utils/axios';
import { ContactActions, ContactActionsEnum } from '../actions/contact';
import { State } from '../reducers';

export const contact =
  (store: MiddlewareAPI) => (next: Dispatch<ContactActions>) => async (action: ContactActions) => {
    switch (action.type) {
      case ContactActionsEnum.SEND_MAIL: {
        try {
          const { email, firstName, lastName, message } = (store.getState() as State).contact;
          const { data } = await axios.post('/mail', {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
            message: message.value,
          });

          action.payload.apiResponse = data;

          setTimeout(() => {
            next(action);
          }, 2500);
        } catch (error) {
          console.log(error);
        }
        break;
      }
      default:
        next(action);
    }
  };
