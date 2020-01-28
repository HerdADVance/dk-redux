import { slots as defaultSlots } from '../normalized-state';

import { LINEUPS_CREATE } from '../actions/lineup-actions';
import { SLOT_CLICK } from '../actions/slot-actions';

//import { addEntity, removeEntity } from './_utilities';

const slotsReducer = (slots = defaultSlots, action) => {

  if (action.type === LINEUPS_CREATE) {
    
    const { slotsToCreate, slotsToCreateIds } = action.payload;

    const newEntities = {...slots.entities, ...slotsToCreate}
    const newIds = [...slots.ids, ...slotsToCreateIds]
    
    return{
    	entities: newEntities,
    	ids: newIds 
    }
  }

  if (action.type === SLOT_CLICK){

    const { slotId } = action.payload;
    slots.entities[slotId].clicked = !slots.entities[slotId].clicked;

    return {
      entities: {...slots.entities, ...slots.entities[slotId]},
      ids: slots.ids
    }

  }

  return slots;
};

export default slotsReducer;