import { SendMailPayload } from '.';

export enum ContactActionsEnum {
  SEND_MAIL = 'SEND_MAIL',
  RESET_MAIL = 'RESET_MAIL',
}

export interface SendMailAction {
  type: ContactActionsEnum.SEND_MAIL;
  payload: SendMailPayload;
}

export interface ResetMailAction {
  type: ContactActionsEnum.RESET_MAIL;
}

export type ContactActions = SendMailAction | ResetMailAction;
