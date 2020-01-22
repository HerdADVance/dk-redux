import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

import SlotsContainer from '../containers/SlotsContainer';

const Lineup = ({ lineup = {} }) => {

  return (
  	<table className="lineup">
  		<tbody>
  			<tr>
  				<td colspan="4">Lineup #1</td>
  			</tr>
			{lineup.slots.map(slotId => (
				<SlotsContainer key={slotId} slotId={slotId} lineupId={lineup.id} />
			))}
  		</tbody>
  	</table>
  );
};

export default Lineup;
