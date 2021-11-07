import { ChangeValueAction, GlobalActionsEnum } from './global.actions';
import { ChangeValuePayload } from './global.payloads';

export const changeValue = (payload: ChangeValuePayload): ChangeValueAction => ({
  type: GlobalActionsEnum.CHANGE_VALUE,
  payload,
});
