import React from 'react';
//import MoveSlotToListContainer from '../containers/MoveSlotToListContainer';
import PlayerContainer from '../containers/PlayerContainer';

const Slot = ({ slot = {}, lineupId }) => { // pass removeSlot here later
  return (
    <tr data-pos={slot.position}>
      <td>{slot.position}</td>
      {slot.players.map(playerId => (
      	<PlayerContainer key={playerId} playerId={playerId} slotId={slot.id} />
      ))}
      <td>+</td>
      {/*MoveSlotToListContainer slotId={slot.id} listId={listId} />*/}
    </tr>
  );
};

export default Slot;