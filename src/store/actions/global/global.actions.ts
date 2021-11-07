import { ChangeValuePayload } from './global.payloads';

export enum GlobalActionsEnum {
  CHANGE_VALUE = 'CHANGE_VALUE',
}

export interface ChangeValueAction {
  type: GlobalActionsEnum.CHANGE_VALUE;
  payload: ChangeValuePayload;
}

export type GlobalActions = ChangeValueAction;
