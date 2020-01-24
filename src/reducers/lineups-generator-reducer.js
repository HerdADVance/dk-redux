import { lineupIdGenerator as defaultLineupIdGenerator } from '../normalized-state';

const lineupsGeneratorReducer = (lineupIdGenerator = defaultLineupIdGenerator) => {
  return lineupIdGenerator;
};

export default lineupsGeneratorReducer;