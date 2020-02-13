console.log("normalizin");

import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

import playerData from './data/college-main-players';

import forEach from 'lodash/forEach';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

// Creating games based on initial players list
let sortedGames = [];

forEach(playerData.players, function(player){
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

sortedGames = uniqBy(sortedGames, 'away');
sortedGames = orderBy(sortedGames, ['time'],['asc'])

console.log(sortedGames);

let sortedTeams = []
forEach(sortedGames, function(game){
  sortedTeams.push(game.away)
  sortedTeams.push(game.home)
})
sortedTeams.push("ALL");

const player = new schema.Entity('players');
const slot = new schema.Entity('slots');
const lineup = new schema.Entity('lineups', {
	slots: [slot]
});


const normalizedPlayers = normalize(playerData.players, [player]);
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
export const teams = sortedTeams;

export default{
  players,
  lineups,
  slots,
  lineupIdGenerator,
  slotIdGenerator,
  ui,
  teams
};

