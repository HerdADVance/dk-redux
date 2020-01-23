import { lineups as defaultLineups } from '../normalized-state';

import { SLOT_CREATE} from '../actions/slot-actions';
import { LINEUP_CREATE, LINEUP_DELETE } from '../actions/lineup-actions';

import { addEntity, removeEntity } from './_utilities';

const lineupsReducer = (lineups = defaultLineups, action) => {
  
  if (action.type === LINEUP_CREATE) {
    const { lineup, lineupid } = action.payload;
    return addEntity(lineups, lineup, lineupid);
  }

  return lineups;
};

export default lineupsReducer;