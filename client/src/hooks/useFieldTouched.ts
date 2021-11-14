import { useDispatch, useSelector } from 'react-redux';
import { fieldTouched } from '../store/actions';
import { State } from '../store/reducers';
import { ContactReducerState, FieldType } from '../store/reducers/contact.reducer';

export const useFieldTouched = (name: string, reducerName: 'contact'): [boolean, () => void] => {
  const dispatch = useDispatch();
  const reducer = useSelector((state: State) => state[reducerName]);

  type StateKey = keyof ContactReducerState;

  return [
    (reducer[name as unknown as StateKey] as FieldType).touched,
    () => dispatch(fieldTouched({ name, reducerName })),
  ];
};
