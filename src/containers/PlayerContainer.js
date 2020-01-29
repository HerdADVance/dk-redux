import { connect } from 'react-redux';
import Player from '../components/Player';
import { playerClick } from '../actions/ui-actions';
//import { removePlayer } from '../actions/player-actions';

const mapStateToProps = (state, ownProps) => {

  if(ownProps.slotId){
  	return { 
  		player: state.players.entities[ownProps.playerId], 
  		display: 'slot'
  	};
  } else{
  	return { 
  		player: state.players.entities[ownProps.playerId], 
  		display: 'playerList', 
  		clickedPlayer: state.ui.clickedPlayer,
  		slots: findPlayerInSlots(state.slots, state.players.entities[ownProps.playerId].id),
  		numLineups: state.lineups.ids.length
  	}
  }
};

function findPlayerInSlots(slots, pid){

	let foundSlots = [];

	for(let i = 0; i < slots.ids.length; i++){

		let slotId = slots.ids[i];

		if(slots.entities[slotId].player == pid ){
			foundSlots.push(slotId);
		}
	}

	return foundSlots;
}

const mapDispatchToProps = {
  playerClick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
