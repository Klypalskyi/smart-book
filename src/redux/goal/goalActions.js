export const ActionType = {
  ADD_GOAL: 'ADD_GOAL',
};

export const addGoal = goal => ({
  type: ActionType.ADD_GOAL,
  payload: goal,
});
