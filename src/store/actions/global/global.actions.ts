import { ChangeTopBarVisibilityPayload } from '.';
import { ChangeValuePayload } from './global.payloads';

export enum GlobalActionsEnum {
  CHANGE_VALUE = 'CHANGE_VALUE',
  HIDE_CAMPAIGN_BAR = 'HIDE_CAMPAIGN_BAR',
  CHANGE_TOP_BAR_VISIBILITY = 'CHANGE_TOP_BAR_VISIBILITY',
}

export interface ChangeValueAction {
  type: GlobalActionsEnum.CHANGE_VALUE;
  payload: ChangeValuePayload;
}

export interface HideCampaignBarAction {
  type: GlobalActionsEnum.HIDE_CAMPAIGN_BAR;
}

export interface ChangeTopBarVisibilityAction {
  type: GlobalActionsEnum.CHANGE_TOP_BAR_VISIBILITY;
  payload: ChangeTopBarVisibilityPayload;
}

export type GlobalActions =
  | ChangeValueAction
  | HideCampaignBarAction
  | ChangeTopBarVisibilityAction;
