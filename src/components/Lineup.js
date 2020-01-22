import React from 'react';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

import SlotsContainer from '../containers/SlotsContainer';

const Lineup = ({ lineup = {} }) => {

  return (
  	<div>
  		<h2>{lineup.id}</h2>
  	</div>
  );
};

export default Lineup;
