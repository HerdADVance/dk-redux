import { connect } from 'react-redux';
import Slot from '../components/Slot';
//import { removeSlot } from '../actions/slot-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    slot: state.slots.entities[ownProps.slotId],
  };
};

export default connect(
  mapStateToProps,
  //{ removeSlot },
)(Slot);