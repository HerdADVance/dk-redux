import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

const Player = ({ player = {}, display, clickedPlayer, playerClick }) => {

	function handleClick(pid) {
		playerClick(pid);
	}

	if(display !== 'slot'){
		return (
			<>
			<tr 
				className="player"
				onClick={() => handleClick(player.id)} 
			>
	    		<td className="player-position">{player.Position}</td>
	     		<td className="player-name">{player.Name}</td>
	     		<td className="player-team">{player.TeamAbbrev}</td>
	     		<td className="player-salary">{player.Salary}</td>
	     		<td className="player-owned">69%</td>
	    	</tr>

			{player.id === clickedPlayer?
				<tr>
					<td colSpan="5">{player.id} | {clickedPlayer}</td>
				</tr>
			:
				''
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
