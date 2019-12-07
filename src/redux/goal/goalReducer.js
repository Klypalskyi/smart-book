import { ActionType } from './goalActions';

const goalReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.ADD_GOAL:
      return action.payload;
    default:
      return state;
  }
};

export default goalReducer;
