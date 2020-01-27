import slateInfo from '../data/slateInfo';

export const LINEUPS_CREATE = 'LINEUPS_CREATE';
//export const LINEUP_DELETE = 'LINEUP_DELETE';

const defaultLineupData = {
  slots: [],
};

export const createLineups = (num, lid, sid) => {

  let lineupsToCreate = {};
  let lineupsToCreateIds = [];

  let slotsToCreate = {};
  let slotsToCreateIds = [];
  
  // Creating lineup
  for(let i = 0; i < num; i++){
    
    let lineup = {}
    let slotsForLineup = [];

    // Creating slot
    for(let j = 0; j < slateInfo.classic.CFB.roster.length; j++){

      let slot = {}

      slot[sid] = {
        id: sid,
        position: slateInfo.classic.CFB.roster[j].position,
        accepts: slateInfo.classic.CFB.roster[j].accepts,
        clicked: false,
        player: false
      }
      
      slotsForLineup.push(sid);

      slotsToCreate = Object.assign({}, slotsToCreate, slot);
      slotsToCreateIds.push(sid);

      sid ++;

    }

    lineup[lid] = {
      id: lid,
      salary: 50000,
      slots: slotsForLineup
    };

    lineupsToCreate = Object.assign({}, lineupsToCreate, lineup);
    lineupsToCreateIds.push(lid);

    lid ++;
  }

  return {
    type: LINEUPS_CREATE,
    payload: { lineupsToCreate, lineupsToCreateIds, slotsToCreate, slotsToCreateIds }
  };

};

// export const removeLineup = lineupId => {
//   return {
//     type: LINEUP_DELETE,
//     payload: { lineupId },
//   };
// };