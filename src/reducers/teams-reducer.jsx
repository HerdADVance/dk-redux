import { teams as defaultTeams } from '../normalized-state';

const teamsReducer = (teams = defaultTeams) => {
  return teams;
};

export default teamsReducer;