import { games as defaultGames } from '../normalized-state';

const gamesReducer = (games = defaultGames) => {
  return games;
};

export default gamesReducer;