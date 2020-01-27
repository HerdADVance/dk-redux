import { slots as defaultSlots } from '../normalized-state';

import { LINEUPS_CREATE } from '../actions/lineup-actions';

//import { addEntity, removeEntity } from './_utilities';

const slotsReducer = (slots = defaultSlots, action) => {
  // if (action.type === PLAYER_CREATE) {
  //   const { player, playerId } = action.payload;
  //   return addEntity(players, player, playerId);
  // }

  if (action.type === LINEUPS_CREATE) {
    
    const { slotsToCreate, slotsToCreateIds } = action.payload;

    const newEntities = {...slots.entities, ...slotsToCreate}
    const newIds = [...slots.ids, ...slotsToCreateIds]
    
    return{
    	entities: newEntities,
    	ids: newIds 
    }
  }

  return slots;
};

export default slotsReducer;