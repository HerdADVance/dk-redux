import { slotIdGenerator as defaultSlotIdGenerator } from '../normalized-state';

const slotsGeneratorReducer = (slotIdGenerator = defaultSlotIdGenerator) => {
  return slotIdGenerator;
};

export default slotsGeneratorReducer;