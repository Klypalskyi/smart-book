// import axios from 'axios';

export const ActionConstants = {
  RESULTS_ADD: 'RESULTS_ADD',
};

export const addResult = res => ({
  type: ActionConstants.RESULTS_ADD,
  payload: res,
});

// export const sendResultToServer = (trainingId, result) => dispatch => {
//   return axios.post(`/training/time/${trainingId}`, result, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
