import { slots as defaultSlots } from '../normalized-state';

import { LINEUPS_CREATE } from '../actions/lineup-actions';
import { SLOT_CLICK } from '../actions/slot-actions';
import { ADD_PLAYER_TO_SLOTS } from '../actions/slot-actions';

import forEach from 'lodash/forEach';

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

    return {
      ...slots,
      entities: {
        ...slots.entities,
        [slotId]: {
          ...slots.entities[slotId],
          clicked: !slots.entities[slotId].clicked
        }
      }
    }

  }

  if (action.type === ADD_PLAYER_TO_SLOTS){

    const { pid, num } = action.payload;

    forEach(slots.entities, function(slot){
      if(slot.player === pid){
        console.log(slot);
      }
    });

    // return {
    //   ...slots,
    //   entities: {
    //     ...slots.entities,
    //     [slotId]: {
    //       ...slots.entities[slotId],
    //       clicked: !slots.entities[slotId].clicked
    //     }
    //   }
    // }

  }

  return slots;
};

export default slotsReducer;