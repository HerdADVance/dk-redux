export const PLAYER_CLICK = 'PLAYER_CLICK';
// export const SLOT_DELETE = 'SLOT_DELETE';
// export const SLOT_MOVE = 'SLOT_MOVE';


// const defaultPlayerData = {
//   position: '',
//   accepts: [],
//   clicked: false,
//   players: []
// };

export const playerClick = (playerId) => {
  return {
    type: PLAYER_CLICK,
    payload: { playerId }
  }
};