// REACT STUFF
import React, {useState, useEffect} from "react";
import { render } from "react-dom";

// OTHER MODULES
import Player from './Player'

const PlayersShown = ({ players }) => {

    return (
        <table className="players">
            {players.length === 0 ? (
                <h1>No players found</h1>
            ) : (
                players.map(player => (
                    <Player
                    	key={player.ID}
                    	id={player.ID}
                    	name={player.Name}
                    	salary={player.Salary}
                    	team={player.TeamAbbrev}
                    	position={player.Position}
                    />
                ))
            )}
        </table>
    );
};

export default PlayersShown