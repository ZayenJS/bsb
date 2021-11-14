import { useDispatch, useSelector } from 'react-redux';
import { resetNotification } from '../store/actions';
import { State } from '../store/reducers';

export const useNotification = (reducerName: keyof State) => {
  const { notification } = useSelector((state: State) => state[reducerName]);
  const dispatch = useDispatch();

  return { notification, resetNotification: () => dispatch(resetNotification({ reducerName })) };
};
