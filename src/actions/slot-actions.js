import slateInfo from '../data/slateInfo';

export const SLOTS_CREATE = 'SLOTS_CREATE';
// export const SLOT_DELETE = 'SLOT_DELETE';
// export const SLOT_MOVE = 'SLOT_MOVE';


const defaultSlotData = {
  position: '',
  accepts: [],
  clicked: false,
  players: []
};

export const createSlots = (numLineups, sid) => {

  let slotsToCreate = {}
  let slotsToCreateIds = []

  for(let i = 0; i < numLineups; i++){

    for(let j = 0; j < slateInfo.classic.CFB.roster.length; j++){

      let slot = {}

      slot[sid] = {
        id: sid,
        position: slateInfo.classic.CFB.roster[j].position,
        accepts: slateInfo.classic.CFB.roster[j].accepts,
        clicked: false,
        player: false
      }

      slotsToCreate = Object.assign({}, slotsToCreate, slot);
      slotsToCreateIds.push(sid);

      sid ++;

    }

  }

  return {
    type: SLOTS_CREATE,
    payload: { slotsToCreate, slotsToCreateIds }
  };


  // const slotId = Date.now().toString();
  // const slot = {
  //   id: slotId,
  //   ...defaultSlotData,
  //   ...slotData,
  // };
  // return {
  //   type: SLOTS_CREATE,
  //   payload: { slot, lineupId, slotId },
  // };

};

// export const removeSlot = (slotId, listId) => {
//   return {
//     type: SLOT_DELETE,
//     payload: { slotId, listId },
//   };
// };

// export const moveSlotToList = (slotId, originListId, destinationListId) => {
//   return {
//     type: SLOT_MOVE,
//     payload: {
//       slotId,
//       originListId,
//       destinationListId,
//     },
//   };
// };
