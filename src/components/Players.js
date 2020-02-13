import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

import slateInfo from '../data/slateInfo';

import forEach from 'lodash/forEach';

const Players = ({ 
	players = [], 
	playersEntities,
	teams,
	clickedPosition,
	clickedTeam, 
	positionClick,
	teamClick 
}) => {

  // Functions
  function handlePositionClick(pos){
  	positionClick(pos);
  }

  function handleTeamClick(team){
  	teamClick(team);
  }

  function positionFilter(position, accepted){
  	for(let i = 0; i < accepted.length; i++){
  		if(accepted[i] == position) return true;
  	}
  	return false;
  }

  // Begin Filter
  let filteredPlayers = players;

  // let foundAcceptedPosition = slateInfo.classic.CFB.roster.filter(function (spot) {
  // 	return spot.position === clickedPosition
  // });
  // let acceptedPositions = foundAcceptedPosition[0].accepts;

  // var filtered_ids = _.filter(collections, function(p){
  //   return _.includes([1,3,4], p.id);
  // });
  
  // .at(ids)
  // .value();

  //Filter by Position
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
  			return filterResult === true && playersEntities[player].TeamAbbrev === clickedTeam;
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
				{teams.map(team => (
					<li 
						key={team}
						onClick={() => handleTeamClick(team)}
					>
					{team}
					</li>
				))}
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
