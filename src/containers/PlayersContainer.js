import { connect } from 'react-redux';
import Players from '../components/Players';

import { positionClick, teamClick } from '../actions/ui-actions';

const mapStateToProps = state => {
  return { 
  	players: state.players.ids, 
  	playersEntities: state.players.entities,
  	teams: state.teams,
  	clickedPosition: state.ui.clickedPosition,
  	clickedTeam: state.ui.clickedTeam
  };
};

const mapDispatchToProps = {
  positionClick,
  teamClick
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
