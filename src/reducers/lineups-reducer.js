import { lineups as defaultLineups } from '../normalized-state';

//import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

//import { addEntity, removeEntity } from './_utilities';

const lineupsReducer = (lineups = defaultLineups, action) => {
  // if (action.type === PLAYER_CREATE) {
  //   const { player, playerId } = action.payload;
  //   return addEntity(players, player, playerId);
  // }

  return lineups;
};

export default lineupsReducer;