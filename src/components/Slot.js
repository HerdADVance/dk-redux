import React from 'react';
//import MoveSlotToListContainer from '../containers/MoveSlotToListContainer';
import PlayerContainer from '../containers/PlayerContainer';

const Slot = ({ slot = {}, lineupId }) => { // pass removeSlot here later

  function handleClick(sid) {

    slotClick(sid);

  }

  return (
    <tr 
        position={slot.position}
        onClick={() => handleClick(slot.id)}
    >

      <td>{slot.position}</td>
      
      {slot.player? 
            <PlayerContainer key={slot.player} playerId={slot.player} slotId={slot.id} />
        :
            <><td></td><td></td></>
      }

      <td>+</td>
      {/*MoveSlotToListContainer slotId={slot.id} listId={listId} />*/}
    </tr>
  );
};

export default Slot;