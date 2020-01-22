import React from 'react';
//import MoveSlotToListContainer from '../containers/MoveSlotToListContainer';

const Slot = ({ slot = {}, lineupId }) => { // pass removeSlot here later
  return (
    <tr data-pos={slot.position}>
      <td>{slot.player}</td>
      <td></td>
      <td></td>
      <td></td>
      {/*MoveSlotToListContainer slotId={slot.id} listId={listId} />*/}
    </tr>
  );
};

export default Slot;