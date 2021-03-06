import { ui as defaultUi } from '../normalized-state';

import { PLAYER_CLICK } from '../actions/ui-actions';
import { POSITION_CLICK } from '../actions/ui-actions';
import { TEAM_CLICK } from '../actions/ui-actions';

const uiReducer = (ui = defaultUi, action) => {
  
  if (action.type === PLAYER_CLICK){
    const { playerId } = action.payload;
    return {
      ...ui,
      clickedPlayer: playerId
    }
  }

  if (action.type === POSITION_CLICK){
    const { position } = action.payload;
    return {
      ...ui,
      clickedPosition: position
    }
  }

  if (action.type === TEAM_CLICK){
    const { team } = action.payload;
    return {
      ...ui,
      clickedTeam: team
    }
  }

  return ui;
};

export default uiReducer;