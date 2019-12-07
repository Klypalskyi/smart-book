import { ActionConstants } from './resultsActions';

const { RESULTS_ADD } = ActionConstants;

export const resultsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case RESULTS_ADD:
      return [...state, payload];
    default:
      return state;
  }
};

export const zero = 0;
