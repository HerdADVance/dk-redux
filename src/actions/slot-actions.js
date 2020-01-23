export const SLOT_CREATE = 'SLOT_CREATE';
// export const SLOT_DELETE = 'SLOT_DELETE';
// export const SLOT_MOVE = 'SLOT_MOVE';

const defaultSlotData = {
  position: '',
  accepts: [],
  clicked: false,
  players: []
};

export const createSlot = (lineupId, slotData) => {
  const slotId = Date.now().toString();
  const slot = {
    id: slotId,
    ...defaultSlotData,
    ...slotData,
  };
  return {
    type: SLOT_CREATE,
    payload: { slot, lineupId, slotId },
  };
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
