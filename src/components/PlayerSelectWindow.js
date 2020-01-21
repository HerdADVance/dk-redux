// REACT STUFF
import React, {useState, useEffect} from "react";
import { render } from "react-dom";

// OTHER MODULES
import PlayersShown from './PlayersShown'

// DATA
import collegeMainPlayers from './../data/collegeMainPlayers'


const PlayerSelectWindow = () => {

	const playersData = collegeMainPlayers

	//const [positionsShown, setPositionsShown] = useState([])
	// const [gamesShown, setGamesShown] = useState([])
	const [playersShown, setPlayersShown] = useState([])

	useEffect(() => {
		
		setPlayersShown(playersData)

	}, [setPlayersShown])

	return(
		<div className="list">
			<div>
				<ul className="sort-players sort-positions clickable">

				</ul>
			</div>

			<div>
				<ul className="sort-players sort-games clickable">
				</ul>
			</div>

			<div className="players-wrap">
				<PlayersShown players={playersShown} />
			</div>
		</div>
	)

}

export default PlayerSelectWindow