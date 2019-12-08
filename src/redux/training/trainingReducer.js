import { ActionType } from './trainingActions';

const trainingReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.GET_TRAINING:
      return payload;
    default:
      return state;
  }
};

export default trainingReducer;
