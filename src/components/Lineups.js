import React from 'react';
import LineupContainer from '../containers/LineupContainer';

const Lineups = ({ lineups = [] }) => {

  return (
    <div className="lineups">
		<div className="lineups-wrap">
			<h1>Lineups</h1>
			{lineups.map(lineupId => (
	    		<LineupContainer key={lineupId} lineupId={lineupId} />
	  		))}
		</div>
	</div>
  );
};

export default Lineups;
