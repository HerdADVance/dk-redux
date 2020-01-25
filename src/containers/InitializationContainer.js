import { connect } from 'react-redux';
import Initialization from '../components/Initialization';
import { createSlot } from '../actions/slot-actions';
import { createLineups } from '../actions/lineup-actions';

const mapStateToProps = state => {
  console.log(state);
  return { 
  	lid: state.lineupIdGenerator,
  	sid: state.slotIdGenerator
   };
};

const mapDispatchToProps = {
  createSlot,
  createLineups
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialization);
