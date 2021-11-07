import { useDispatch } from 'react-redux';
import { changeValue } from '../store/actions';
import { State } from '../store/reducers';

export const useChangeValue = (name: string) => {
  const dispatch = useDispatch();

  return (reducerName: keyof State, value: string) =>
    dispatch(changeValue({ name, reducerName, value }));
};
