import { useDispatch, useSelector } from 'react-redux';
import { hideCampaignBar } from '../store/actions';
import { State } from '../store/reducers';

export const useHideCampaignBar = () => {
  const dispatch = useDispatch();
  const { isCampaignBarVisible } = useSelector((state: State) => state.global);

  return { hideCampaignBar: () => dispatch(hideCampaignBar()), isCampaignBarVisible };
};
