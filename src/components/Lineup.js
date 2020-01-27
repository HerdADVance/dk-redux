import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

import SlotsContainer from '../containers/SlotsContainer';

const Lineup = ({ lineup = {}, index }) => {

  return (
  	<table className="lineup">
  		<tbody>
  			<tr>
  				<td colSpan="4">Lineup #{index}</td>
  			</tr>
  			{lineup.slots.map(slotId => (
  				<SlotsContainer key={slotId} slotId={slotId} lineupId={lineup.id} />
  			))}
  		</tbody>
  	</table>
  );
};

export default Lineup;
