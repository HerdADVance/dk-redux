import { connect } from 'react-redux';
import Lineups from '../components/Lineups';

const mapStateToProps = state => {
  return { lineups: state.lineups.ids };
};

export default connect(mapStateToProps)(Lineups);
