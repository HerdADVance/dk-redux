import React from 'react';
import PlayerContainer from '../containers/PlayerContainer';

const Players = ({ players = [] }) => {
  
  console.log(players);
  return (
    <section className="Players">
      {players.map(playerId => (
        <PlayerContainer key={playerId} playerId={playerId} />
      ))}
    </section>
  );
};

export default Players;
