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

    // const foundSlot = slots.entities[slotId];
    // foundSlot.clicked = !foundSlot.clicked;

    // const newEntities = {...slots.entities, ...foundSlot};
    // const newIds = [...slots.ids];

    // const newSlots = {
    //   entities: newEntities,
    //   ids: newIds
    // };

    // const newState = {...slots, ...newSlots};

    // return newState;

    return {
      ...slots, // copy state
      entities: {
        ...slots.entities, // copy houses
        [slotId]: {  // update one specific house (using Computed Property syntax)
          ...slots.entities[slotId],  // copy that specific house's properties
          clicked: !slots.entities[slotId].clicked   // update its `points` property
        }
      }
    }

  }

  return slots;
};

export default slotsReducer;