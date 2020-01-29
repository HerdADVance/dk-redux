import { lineups as defaultLineups } from '../normalized-state';
// access idGenerator here

import { SLOT_CREATE } from '../actions/slot-actions';
import { LINEUPS_CREATE, LINEUP_DELETE } from '../actions/lineup-actions';

import { addEntity, removeEntity } from './_utilities';

const lineupsReducer = (lineups = defaultLineups, action) => {
  
  // if (action.type === LINEUP_CREATE) {
  //   const { lineup, lineupid } = action.payload;
  //   return addEntity(lineups, lineup, lineupid);
  // }

  if (action.type === LINEUPS_CREATE) {
    
    const { lineupsToCreate, lineupsToCreateIds } = action.payload;

    const newEntities = {...lineups.entities, ...lineupsToCreate}
    const newIds = [...lineups.ids, ...lineupsToCreateIds]
    
    return{
    	entities: newEntities,
    	ids: newIds 
    }
  }

  return lineups;
};

export default lineupsReducer;