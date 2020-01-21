import { slots as defaultSlots } from '../normalized-state';

//import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

//import { addEntity, removeEntity } from './_utilities';

const slotsReducer = (slots = defaultSlots, action) => {
  // if (action.type === PLAYER_CREATE) {
  //   const { player, playerId } = action.payload;
  //   return addEntity(players, player, playerId);
  // }

  return slots;
};

export default slotsReducer;