import { connect } from 'react-redux';
import Players from '../components/Players';

import { positionClick } from '../actions/ui-actions';

const mapStateToProps = state => {
  return { 
  	players: state.players.ids, 
  	playersEntities: state.players.entities,
  	clickedPosition: state.ui.clickedPosition,
  };
};

const mapDispatchToProps = {
  positionClick
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
