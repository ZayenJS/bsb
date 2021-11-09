import { GlobalActions, GlobalActionsEnum } from '../actions';

export interface GlobalReducerState {
  isCampaignBarVisible: boolean;
  isTopBarVisible: boolean;
  drawerVisible: boolean;
}

const INITIAL_STATE: GlobalReducerState = {
  isCampaignBarVisible: true,
  isTopBarVisible: true,
  drawerVisible: false,
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
    case GlobalActionsEnum.CHANGE_DRAWER_STATUS:
      return {
        ...state,
        drawerVisible: action.payload.visible,
      };
    default:
      return state;
  }
};

export default reducer;
