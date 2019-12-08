export const ActionType = {
  GET_TRAINING: 'GET_TRAINING',
};

export const getTraining = training => ({
  type: ActionType.GET_TRAINING,
  payload: training,
});
