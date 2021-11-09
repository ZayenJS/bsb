import { useDispatch, useSelector } from 'react-redux';
import { changeDrawerStatus } from '../store/actions';
import { State } from '../store/reducers';

export const useDrawer = () => {
  const dispatch = useDispatch();
  const { drawerVisible } = useSelector((state: State) => state.global);

  return {
    drawerVisible,
    changeDrawerStatus: (visible: boolean) => dispatch(changeDrawerStatus({ visible })),
  };
};
