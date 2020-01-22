import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

const Players = ({ players = [] }) => {

  return (
    <div className="list">
		<div>
			<ul className="sort-players sort-positions clickable">

			</ul>
		</div>

		<div>
			<ul className="sort-players sort-games clickable">
			</ul>
		</div>

		<div className="players-wrap">
			<table className="players">
				{players.map(playerId => (
		    		<PlayerContainer key={playerId} playerId={playerId} />
		  		))}
		  	</table>
		</div>
	</div>
  );
};

export default Players;
