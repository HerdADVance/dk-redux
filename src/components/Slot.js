import React from 'react';
//import MoveSlotToListContainer from '../containers/MoveSlotToListContainer';
import PlayerContainer from '../containers/PlayerContainer';

const Slot = ({ slot = {}, lineupId, slotClick }) => { // pass removeSlot here later

  function handleClick(sid) {

    slotClick(sid);

  }

  return (

    <tr 
      onClick={() => handleClick(slot.id)} 
      position={slot.position}
      className={slot.clicked? 'clicked' : ''}
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