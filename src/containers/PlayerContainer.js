import { connect } from 'react-redux';
import Player from '../components/Player';
//import { removePlayer } from '../actions/player-actions';

const mapStateToProps = (state, ownProps) => {
  return { player: state.players.entities[ownProps.playerId] };
};

const mapDispatchToProps = {
  //removePlayer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
