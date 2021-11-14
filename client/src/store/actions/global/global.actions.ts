import {
  ChangeDrawerStatusPayload,
  ChangeTopBarVisibilityPayload,
  FieldTouchedPayload,
  ResetNotificationPayload,
  SetFieldErrorPayload,
} from '.';
import { ChangeValuePayload } from './global.payloads';

export enum GlobalActionsEnum {
  CHANGE_VALUE = 'CHANGE_VALUE',
  HIDE_CAMPAIGN_BAR = 'HIDE_CAMPAIGN_BAR',
  CHANGE_TOP_BAR_VISIBILITY = 'CHANGE_TOP_BAR_VISIBILITY',
  CHANGE_DRAWER_STATUS = 'CHANGE_DRAWER_STATUS',
  FIELD_TOUCHED = 'FIELD_TOUCHED',
  SET_FIELD_ERROR = 'SET_FIELD_ERROR',
  RESET_NOTIFICATION = 'RESET_NOTIFICATION',
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

export interface ChangeDrawerStatusAction {
  type: GlobalActionsEnum.CHANGE_DRAWER_STATUS;
  payload: ChangeDrawerStatusPayload;
}

export interface FieldTouchedAction {
  type: GlobalActionsEnum.FIELD_TOUCHED;
  payload: FieldTouchedPayload;
}

export interface SetFieldErrorAction {
  type: GlobalActionsEnum.SET_FIELD_ERROR;
  payload: SetFieldErrorPayload;
}

export interface ResetNotificationAction {
  type: GlobalActionsEnum.RESET_NOTIFICATION;
  payload: ResetNotificationPayload;
}

export type GlobalActions =
  | ChangeValueAction
  | HideCampaignBarAction
  | ChangeTopBarVisibilityAction
  | ChangeDrawerStatusAction
  | FieldTouchedAction
  | ResetNotificationAction
  | SetFieldErrorAction;
