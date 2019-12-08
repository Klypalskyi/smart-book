export const ActionConstants = {
  RESULTS_ADD: 'RESULTS_ADD',
  // RESULTS_GET: 'RESULTS_GET',
  // RESULTS_POST: 'RESULTS_POST',
};

// export const getResults = res => ({
//   type: ActionResults.RESULTS_GET,
//   payload: res,
// });

// export const postResults = () => ({
//   type: ActionResults.RESULTS_POST,
// });

export const addResult = obj => ({
  type: ActionConstants.RESULTS_ADD,
  payload: obj,
});
