import { ui as defaultUi } from '../normalized-state';

import { PLAYER_CLICK } from '../actions/ui-actions';

const uiReducer = (ui = defaultUi, action) => {
  
  if (action.type === PLAYER_CLICK){

    const { playerId } = action.payload;

    return {
      ...ui,
      clickedPlayer: playerId
    }

  }

  return ui;
};

export default uiReducer;