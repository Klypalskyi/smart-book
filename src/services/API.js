import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
  logOutSuccess,
} from '../redux/login/loginActions';
import { getUserToken } from '../redux/selectors/sessionSelectors';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const login = credentials => dispatch => {
  dispatch(loginRequest());

  axios
    .post('/auth/login', credentials)
    .then(response => {
      dispatch(loginSuccess(response));
    })
    .catch(err => {
      dispatch(loginError(err));
    });
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getUserToken(getState());
  if (!token) {
    return;
  }
  setAuthToken(token);
  dispatch(refreshUserRequest());

  axios
    .get('/user/me')
    .then(response => {
      dispatch(refreshUserSuccess(response));
    })
    .catch(err => {
      dispatch(refreshUserError(err));
    });
};

export const logOut = () => dispatch => {
  clearAuthToken();
  dispatch(logOutSuccess());
};
