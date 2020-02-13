import { combineReducers } from 'redux';

import players from './players-reducer';
import lineups from './lineups-reducer';
import slots from './slots-reducer';
import ui from './ui-reducer';
import teams from './teams-reducer';
// import lineupIdGenerator from './lineups-generator-reducer';
// import slotIdGenerator from './slots-generator-reducer';

export default combineReducers({
  players,
  lineups,
  slots,
  ui,
  teams
});
