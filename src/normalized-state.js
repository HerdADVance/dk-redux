import defaultState from './default-state';

let playerIds = [];
for(var i = 0; i < defaultState.players.length; i++){
	playerIds.push(defaultState.players[i].ID);
}

export const lineups = {
  entities: defaultState.lineups,
  ids: [1]
};

export const players = {
  entities: defaultState.players,
  ids: playerIds
};

export const slots = {
  entities: defaultState.slots,
  ids: [1,2,3,4,5,6,7,8]
};

export default{
  lineups,
  players,
  slots
};

