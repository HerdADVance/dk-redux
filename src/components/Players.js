import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

import slateInfo from '../data/slateInfo';

import forEach from 'lodash/forEach';
import includes from 'lodash/includes';

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
	let filteredPositions = [];
	let filteredTeams = [];

	// Filter by Position
	switch(clickedPosition){
		case 'ALL':
			filteredPositions = slateInfo.classic.CFB.positions
			break;

		default:
			let foundAcceptedPosition = slateInfo.classic.CFB.roster.filter(function (spot) {
				return spot.position === clickedPosition
			});

			filteredPositions = foundAcceptedPosition[0].accepts;
		break;
	}

	// Filter by Team
	switch(clickedTeam){
		case 'ALL':
			filteredTeams = teams;
			break

		default:
			filteredTeams.push(clickedTeam);
			break;
	}

	// Using previous filters for final filter
	filteredPlayers = filteredPlayers.filter( function (player) {

		let entity = playersEntities[player];

		let matchesPosition = includes(filteredPositions, entity.Position);
		let matchesTeam = includes(filteredTeams, entity.TeamAbbrev);

		return matchesPosition && matchesTeam;
	});

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
