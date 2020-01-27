import slateInfo from '../data/slateInfo';

export const SLOT_CLICK = 'SLOT_CLICK';
// export const SLOT_DELETE = 'SLOT_DELETE';
// export const SLOT_MOVE = 'SLOT_MOVE';


const defaultSlotData = {
  position: '',
  accepts: [],
  clicked: false,
  players: []
};

export const slotClick = (slotId) => {
  return {
    type: SLOT_CLICK,
    payload: { slotId }
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
