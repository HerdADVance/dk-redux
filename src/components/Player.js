// import React from "react"

// export default function Player({ id, name, salary, team, position}) {

//     return (
//         <tr className="player">
//         	<td className="position">{position}</td>
//             <td className="name">{name}</td>
//             <td className="team">{team}</td>
//             <td className="team">{salary}</td>
//             <td className="team">---</td>
//         </tr>
//     )
// }


import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

const Player = ({ player = {} }) => {

  return (
  	<tr className="player">
    	<td className="position">{player.Position}</td>
     	<td className="name">{player.Name}</td>
     	<td className="team">{player.TeamAbbrev}</td>
     	<td className="team">{player.Salary}</td>
     	<td className="team">---</td>
    </tr>
  );
};

export default Player;
