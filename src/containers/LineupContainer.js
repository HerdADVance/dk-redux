import { connect } from 'react-redux';
import Lineup from '../components/Lineup';
//import { removeLineup } from '../actions/lineup-actions';

const mapStateToProps = (state, ownProps) => {
  return { lineup: state.lineups.entities[ownProps.lineupId] };
};

const mapDispatchToProps = {
  //removeLineup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lineup);
