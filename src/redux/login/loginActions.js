export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',
  LOGOUT: 'LOGOUT',
};

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const loginSuccess = response => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: response,
});

export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: error,
});

export const refreshUserRequest = () => ({
  type: ActionType.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = response => ({
  type: ActionType.REFRESH_USER_SUCCESS,
  payload: response,
});

export const refreshUserError = error => ({
  type: ActionType.REFRESH_USER_ERROR,
  payload: error,
});

export const logOutSuccess = () => ({
  type: ActionType.LOGOUT,
});
