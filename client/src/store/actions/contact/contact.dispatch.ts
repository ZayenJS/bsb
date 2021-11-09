import { ResetMailAction, SendMailPayload } from '.';
import { ContactActionsEnum, SendMailAction } from './contact.actions';

export const sendMail = (payload: SendMailPayload): SendMailAction => ({
  type: ContactActionsEnum.SEND_MAIL,
  payload,
});

export const resetMail = (): ResetMailAction => ({ type: ContactActionsEnum.RESET_MAIL });
