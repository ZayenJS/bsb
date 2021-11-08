import {
  ChangeTopBarVisibilityAction,
  ChangeTopBarVisibilityPayload,
  HideCampaignBarAction,
} from '.';
import { ChangeValueAction, GlobalActionsEnum } from './global.actions';
import { ChangeValuePayload } from './global.payloads';

export const changeValue = (payload: ChangeValuePayload): ChangeValueAction => ({
  type: GlobalActionsEnum.CHANGE_VALUE,
  payload,
});

export const hideCampaignBar = (): HideCampaignBarAction => ({
  type: GlobalActionsEnum.HIDE_CAMPAIGN_BAR,
});

export const changeTopBarVisibility = (
  payload: ChangeTopBarVisibilityPayload,
): ChangeTopBarVisibilityAction => ({
  type: GlobalActionsEnum.CHANGE_TOP_BAR_VISIBILITY,
  payload,
});
