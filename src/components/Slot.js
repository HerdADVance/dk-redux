import React from 'react';
//import MoveSlotToListContainer from '../containers/MoveSlotToListContainer';

const Slot = ({ slot = {}, listId, removeSlot }) => {
  return (
    <article className="Slot">
      <h3>{slot.title}</h3>
      <div className="Slot-description">{slot.description}</div>
      {/*MoveSlotToListContainer slotId={slot.id} listId={listId} />*/}
    </article>
  );
};

export default Slot;