import { connect } from 'react-redux';
import Players from '../components/Players';

const getFilteredPlayers = state => {
	return state.players.ids
}

const mapStateToProps = state => {
  return { players: state.players.ids };
};

export default connect(mapStateToProps)(Players);
