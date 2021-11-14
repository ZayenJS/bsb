import {
  ChangeDrawerStatusAction,
  ChangeDrawerStatusPayload,
  ChangeTopBarVisibilityAction,
  ChangeTopBarVisibilityPayload,
  FieldTouchedAction,
  FieldTouchedPayload,
  HideCampaignBarAction,
  ResetNotificationAction,
  ResetNotificationPayload,
  SetFieldErrorAction,
  SetFieldErrorPayload,
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

export const changeDrawerStatus = (
  payload: ChangeDrawerStatusPayload,
): ChangeDrawerStatusAction => ({
  type: GlobalActionsEnum.CHANGE_DRAWER_STATUS,
  payload,
});

export const fieldTouched = (payload: FieldTouchedPayload): FieldTouchedAction => ({
  type: GlobalActionsEnum.FIELD_TOUCHED,
  payload,
});

export const setFieldError = (payload: SetFieldErrorPayload): SetFieldErrorAction => ({
  type: GlobalActionsEnum.SET_FIELD_ERROR,
  payload,
});

export const resetNotification = (payload: ResetNotificationPayload): ResetNotificationAction => ({
  type: GlobalActionsEnum.RESET_NOTIFICATION,
  payload,
});
