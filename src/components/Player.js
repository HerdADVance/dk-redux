import React, { useState } from 'react';

import Slider, { Range } from 'rc-slider';
//import PlayerSlider from './PlayerSlider';

import 'rc-slider/assets/index.css';

//import CardsContainer from '../containers/CardsContainer';
//import CreateCardContainer from '../containers/CreateCardContainer';

const Player = ({ 
	player = {}, 
	display, 
	clickedPlayer, 
	slots, 
	numLineups, 
	playerClick 
}) => {

	if(display !== 'slot'){ // This will handle the main Players table. Else handles simply outputting name and salary to slot

		const [sliderValue, setSliderValue] = useState(slots.length);

		function handleClick(pid) {
			setSliderValue(slots.length);
			playerClick(pid);
		}

		function handleSliderChange(value){
			setSliderValue(value);
		}

	
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
	     		<td className="player-owned">{parseFloat((slots.length / numLineups) * 100).toFixed(2)}%</td>
	    	</tr>

			{player.id === clickedPlayer?
				<tr>
					<td colSpan="5">
						<p>{player.Name} is in {slots.length} of {numLineups} lineups.</p>
						<Slider 
							min={0} 
							max={numLineups} 
							defaultValue={slots.length}
							value={sliderValue}
							onChange={handleSliderChange} 
						/>
						{sliderValue}
					</td>
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
