export const LINEUPS_CREATE = 'LINEUPS_CREATE';
//export const LINEUP_DELETE = 'LINEUP_DELETE';

const defaultLineupData = {
  slots: [],
};

export const createLineups = (num, lid, sid) => {

  let lineupsToCreate = {};
  let lineupsToCreateIds = []
  let slotsToCreate = []
  
  for(let i = 0; i < num; i++){
    
    let lineup = {}
    
    let slotsForLineup = []
    for(let j = 0; j < 8; j++){
      slotsForLineup.push(sid);
      sid ++;
    }

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