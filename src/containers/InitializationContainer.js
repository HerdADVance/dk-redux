import { connect } from 'react-redux';
import Initialization from '../components/Initialization';
import { createLineups } from '../actions/lineup-actions';

const mapStateToProps = state => {
  return { 
  	lid: state.lineupIdGenerator,
  	sid: state.slotIdGenerator
   };
};

const mapDispatchToProps = {
  createLineups
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialization);
