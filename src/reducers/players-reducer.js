import { players as defaultPlayers } from '../normalized-state';
import { lineups as defaultLineups } from '../normalized-state';

//import { ADD_PLAYER_TO_SLOTS} from '../actions/player-actions';

//import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

//import { addEntity, removeEntity } from './_utilities';

const playersReducer = (players = defaultPlayers, action) => {
  // if (action.type === PLAYER_CREATE) {
  //   const { player, playerId } = action.payload;
  //   return addEntity(players, player, playerId);
  // }

  return players;
};

export default playersReducer;
