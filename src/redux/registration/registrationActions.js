export const ActionType = {
  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_ERROR: 'REGISTRATION_ERROR',
};

export const registrationRequest = () => ({
  type: ActionType.REGISTRATION_REQUEST,
});

export const registrationSuccess = response => ({
  type: ActionType.REGISTRATION_SUCCESS,
  payload: {
    response,
  },
});

export const registrationError = error => ({
  type: ActionType.REGISTRATION_ERROR,
  payload: {
    error,
  },
});
