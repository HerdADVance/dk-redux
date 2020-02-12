export const PLAYER_CLICK = 'PLAYER_CLICK';
export const POSITION_CLICK = 'POSITION_CLICK';
export const TEAM_CLICK = 'TEAM_CLICK';


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

export const positionClick = (position) => {
  return {
    type: POSITION_CLICK,
    payload: { position }
  }
};

export const teamClick = (team) => {
  return {
    type: TEAM_CLICK,
    payload: { team }
  }
};