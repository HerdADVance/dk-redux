import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

import slateInfo from '../data/slateInfo';

const Players = ({ 
	players = [], 
	playersEntities, 
	clickedPosition, 
	positionClick 
}) => {

  // Functions
  function handlePositionClick(pos){
  	positionClick(pos);
  }

  function positionFilter(position, accepted){
  	for(let i = 0; i < accepted.length; i++){
  		if(accepted[i] == position) return true;
  	}
  	return false;
  }

  // Begin Filter
  let filteredPlayers = players;

  // Filter by Position
  switch(clickedPosition){
  	case 'ALL':
  		break;

  	default:
  		let foundAcceptedPosition = slateInfo.classic.CFB.roster.filter(function (spot) {
  			return spot.position === clickedPosition
  		});

  		let acceptedPositions = foundAcceptedPosition[0].accepts;
  		
  		filteredPlayers = players.filter( function (player) {
  			let filterResult = positionFilter(playersEntities[player].Position, acceptedPositions);
  			return filterResult === true;
		});

		break;
  }

  // Filter by Team

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
					{filteredPlayers.map(playerId => (
		    			<PlayerContainer key={playerId} playerId={playerId} />
		  			))}
		  		</tbody>
		  	</table>
		</div>
	</div>
  );
};

export default Players;
