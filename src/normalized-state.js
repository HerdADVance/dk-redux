import { schema, normalize } from 'normalizr';
import defaultState from './default-state';


const player = new schema.Entity('players');
const normalizedPlayers = normalize(defaultState.players, [player]);
export const players = {
  entities: normalizedPlayers.entities.players,
  ids: normalizedPlayers.result,
};

const lineup = new schema.Entity('lineups');
const normalizedLineups = normalize(defaultState.lineups, [lineup]);
export const lineups = {
  entities: normalizedLineups.entities.lineups,
  ids: normalizedLineups.result,
};

// let playerIds = [];
// for(var i = 0; i < defaultState.players.length; i++){
// 	playerIds.push(defaultState.players[i].ID);
// }

// export const lineups = {
//   entities: defaultState.lineups,
//   ids: [1]
// };

// export const players = {
//   entities: defaultState.players,
//   ids: playerIds
// };

// export const slots = {
//   entities: defaultState.slots,
//   ids: [1,2,3,4,5,6,7,8]
// };

export default{
  players,
  lineups
};

