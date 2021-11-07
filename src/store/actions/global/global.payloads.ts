import { State } from '../../reducers';

export interface ChangeValuePayload {
  name: string;
  reducerName: keyof State;
  value: string;
}
