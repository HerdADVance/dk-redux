import { connect } from 'react-redux';
import Player from '../components/Player';
//import { removePlayer } from '../actions/player-actions';

const mapStateToProps = (state, ownProps) => {

  if(ownProps.slotId){
  	return { player: state.players.entities[ownProps.playerId], display: 'slot' };
  } else{
  	return { player: state.players.entities[ownProps.playerId], display: 'playerList'}
  }
};

const mapDispatchToProps = {
  //removePlayer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
