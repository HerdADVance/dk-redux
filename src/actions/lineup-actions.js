export const LINEUPS_CREATE = 'LINEUPS_CREATE';
//export const LINEUP_DELETE = 'LINEUP_DELETE';

const defaultLineupData = {
  slots: [],
};

export const createLineups = (num, lid) => {

  let lineupsToCreate = {};
  let lineupsToCreateIds = []
  
  for(let i = 0; i < num; i++){
    
    let lineup = {}
    lineup[lid] = {
      id: lid,
      salary: 50000,
      slots: []
    }

    lineupsToCreate = Object.assign({}, lineupsToCreate, lineup);
    lineupsToCreateIds.push(lid);

    lid ++;
  }

  console.log(lineupsToCreate);

  return {
    type: LINEUPS_CREATE,
    payload: { lineupsToCreate, lineupsToCreateIds }
  };

};

// export const removeLineup = lineupId => {
//   return {
//     type: LINEUP_DELETE,
//     payload: { lineupId },
//   };
// };