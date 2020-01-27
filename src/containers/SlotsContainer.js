import { connect } from 'react-redux';
import Slot from '../components/Slot';
import { slotClick } from '../actions/slot-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    slot: state.slots.entities[ownProps.slotId],
    playerrr: "ABC"
  };
};

const mapDispatchToProps = {
	slotClick
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slot);