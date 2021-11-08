import { GlobalActions, GlobalActionsEnum } from '../actions';

export interface GlobalReducerState {
  isCampaignBarVisible: boolean;
  isTopBarVisible: boolean;
}

const INITIAL_STATE: GlobalReducerState = {
  isCampaignBarVisible: true,
  isTopBarVisible: true,
};

const reducer = (
  state: GlobalReducerState = INITIAL_STATE,
  action: GlobalActions,
): GlobalReducerState => {
  switch (action.type) {
    case GlobalActionsEnum.HIDE_CAMPAIGN_BAR:
      return {
        ...state,
        isCampaignBarVisible: false,
      };
    case GlobalActionsEnum.CHANGE_TOP_BAR_VISIBILITY:
      return {
        ...state,
        isTopBarVisible: action.payload.visible,
      };
    default:
      return state;
  }
};

export default reducer;
