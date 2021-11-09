import { State } from '../../reducers';

export interface ChangeValuePayload {
  name: string;
  reducerName: keyof State;
  value: string;
}

export interface ChangeTopBarVisibilityPayload {
  visible: boolean;
}

export interface ChangeDrawerStatusPayload {
  visible: boolean;
}

export interface FieldTouchedPayload {
  name: string;
  reducerName: keyof State;
}
