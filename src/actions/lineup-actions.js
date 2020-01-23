export const LINEUP_CREATE = 'LINEUP_CREATE';
//export const LINEUP_DELETE = 'LINEUP_DELETE';

const defaultLineupData = {
  slots: [],
};

export const createLineup = lineupData => {
  const lineupId = Date.now().toString();
  const lineup = {
    id: lineupId,
    salary: 50000,
    ...defaultLineupData,
    ...lineupData,
  };
  return {
    type: LINEUP_CREATE,
    payload: { lineup, lineupId },
  };
};

// export const removeLineup = lineupId => {
//   return {
//     type: LINEUP_DELETE,
//     payload: { lineupId },
//   };
// };