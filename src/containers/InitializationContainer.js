import { connect } from 'react-redux';
import Initialization from '../components/Initialization';
import { createSlots } from '../actions/slot-actions';
import { createLineups } from '../actions/lineup-actions';

const mapStateToProps = state => {
  console.log(state);
  return { 
  	lid: state.lineupIdGenerator,
  	sid: state.slotIdGenerator
   };
};

const mapDispatchToProps = {
  createSlots,
  createLineups
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialization);
