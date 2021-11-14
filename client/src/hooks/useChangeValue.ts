import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../store/actions';
import { State } from '../store/reducers';
import { ContactReducerState, FieldType } from '../store/reducers/contact.reducer';

export const useChangeValue = (name: string, reducerName?: 'contact') => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);

  if (reducerName) {
    const reducer = state[reducerName];

    type StateKey = keyof ContactReducerState;

    return {
      value: (reducer[name as unknown as StateKey] as FieldType).value,
      changeValue: (reducerName: keyof State, value: string) =>
        dispatch(changeValue({ name, reducerName, value })),
    };
  }

  return {
    value: null,
    changeValue: (reducerName: keyof State, value: string) =>
      dispatch(changeValue({ name, reducerName, value })),
  };
};
