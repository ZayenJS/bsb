import { useDispatch, useSelector } from 'react-redux';
import { fieldTouched } from '../store/actions';
import { State } from '../store/reducers';
import { ContactReducerState, FieldType } from '../store/reducers/contact.reducer';
import { GlobalReducerState } from '../store/reducers/global.reducer';

export const useFieldTouched = (name: string, reducerName: keyof State): [boolean, () => void] => {
  const dispatch = useDispatch();
  const reducer = useSelector((state: State) => state[reducerName]);

  type StateKey = keyof ContactReducerState & keyof GlobalReducerState;

  return [
    (reducer[name as StateKey] as FieldType).touched,
    () => dispatch(fieldTouched({ name, reducerName })),
  ];
};
