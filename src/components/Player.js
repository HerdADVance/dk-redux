import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

const Player = ({ player = {}, display }) => {

	if(display !== 'slot'){
		return (
			<tr className="player">
	    		<td className="position">{player.Position}</td>
	     		<td className="name">{player.Name}</td>
	     		<td className="team">{player.TeamAbbrev}</td>
	     		<td className="team">{player.Salary}</td>
	     		<td className="team"></td>
	    	</tr>
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
