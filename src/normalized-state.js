console.log("normalizin");

import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

import forEach from 'lodash/forEach';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

// Creating games based on initial players list
let sortedGames = [];

forEach(defaultState.players, function(player){
  console.log(player);
  let game = {};
  let info = player['Game Info'];
  game['away'] = info.substr(0, info.indexOf('@'));

  info = info.substring(info.indexOf("@") + 1);
  game['home'] = info.substr(0, info.indexOf(' '));

  info = info.substring(info.indexOf(" ") + 1);
  info = info.substring(info.indexOf(" ") + 1);
  info = info.substring(0, info.indexOf(' '));
  info = info.slice(0, -2); 
  game['time'] = info

  sortedGames.push(game);
});

let games = uniqBy(sortedGames, 'away');
games = orderBy(games, ['time'],['asc'])

console.log(games);


const player = new schema.Entity('players');
const slot = new schema.Entity('slots');
const lineup = new schema.Entity('lineups', {
	slots: [slot]
});

const normalizedPlayers = normalize(defaultState.players, [player]);
const normalizedLineups = normalize(defaultState.lineups, [lineup]);


export const players = {
  entities: normalizedPlayers.entities.players,
  ids: normalizedPlayers.result,
};

export const lineups = {
  entities: normalizedLineups.entities.lineups,
  ids: normalizedLineups.result,
};

export const slots = {
	entities: normalizedLineups.entities.slots,
	ids: Object.keys(normalizedLineups.entities.slots)
}

export const lineupIdGenerator = defaultState.lineupIdGenerator;
export const slotIdGenerator = defaultState.slotIdGenerator;
export const ui = defaultState.ui;

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
  lineups,
  slots,
  lineupIdGenerator,
  slotIdGenerator,
  ui
};

