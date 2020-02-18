import slateInfo from '../data/slateInfo';

export const SLOT_CLICK = 'SLOT_CLICK';
// export const SLOT_DELETE = 'SLOT_DELETE';
// export const SLOT_MOVE = 'SLOT_MOVE';
export const ADD_PLAYER_TO_SLOTS = 'ADD_PLAYER_TO_SLOTS';


const defaultSlotData = {
  position: '',
  accepts: [],
  clicked: false,
  player: false
};

export const slotClick = (slotId) => {
  return {
    type: SLOT_CLICK,
    payload: { slotId }
  }
};

// do logic here
export const addPlayerToSlots = (pid, num) => {
  return {
    type: ADD_PLAYER_TO_SLOTS,
    payload: { pid, num }
  }
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
