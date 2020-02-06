import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

import slateInfo from '../data/slateInfo';

const Players = ({ players = [] }) => {

  function handlePositionClick(pos){
  	console.log(pos);
  }

  // let filteredPlayers = players.filter( function (player) {
  //   return player.Position === 'RB'
  // });

  // console.log(filteredPlayers);

  return (
    <div className="list">
		<div>
			<ul className="sort-players sort-positions clickable">
				{slateInfo.classic.CFB.positions.map(position => (
					<li 
						key={position}
						onClick={() => handlePositionClick(position)}
					>
					{position}
					</li>
				))}
			</ul>
		</div>

		<div>
			<ul className="sort-players sort-games clickable">
			</ul>
		</div>

		<div className="players-wrap">
			<table className="players">
				<tbody>
					{/* filter here */}
					{players.map(playerId => (
		    			<PlayerContainer key={playerId} playerId={playerId} />
		  			))}
		  		</tbody>
		  	</table>
		</div>
	</div>
  );
};

export default Players;
