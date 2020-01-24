import { connect } from 'react-redux';
import Initialization from '../components/Initialization';
import { createSlot } from '../actions/slot-actions';
import { createLineup } from '../actions/lineup-actions';

// const mapStateToProps = state => {
//   return { 
//   	lid: state.lineupIdGenerator,
//   	sid: state.slotIdGenerator
//    };
// };

const mapDispatchToProps = {
  createSlot,
  createLineup
};

export default connect(null, mapDispatchToProps)(Initialization);
