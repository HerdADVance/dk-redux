import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

const Player = ({ player = {}, display, clickedPlayer }) => {

	if(display !== 'slot'){
		return (
			<>
			<tr className="player">
	    		<td className="player-position">{player.Position}</td>
	     		<td className="player-name">{player.Name}</td>
	     		<td className="player-team">{player.TeamAbbrev}</td>
	     		<td className="player-salary">{player.Salary}</td>
	     		<td className="player-owned">69%</td>
	    	</tr>

			{player.id?
				<tr>
					<td colSpan="5">{player.id} | {clickedPlayer}</td>
				</tr>
			:
				<tr>
					<td colSpan="5">Nope</td>
				</tr>
			}

			</>

	  	);
	} else{
  		return(
  			<>
  				<td>{player.Name}</td>
  				<td>{player.Salary}</td>
  			</>
  		);
  	}
};

export default Player;
