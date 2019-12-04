import axios from 'axios';
import * as apiEndpoint from '../api/apiEndpoint';
import {
  loginRequest,
  loginSuccess,
  loginError,
} from '../redux/login/loginActions';
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
} from '../redux/registration/registrationActions';

axios.defaults.baseURL = 'https://book-read.goit.co.ua/api/v1';

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

export const registration = userValue => dispatch => {
  dispatch(registrationRequest());

  axios
    .post(apiEndpoint.registration, userValue)
    .then(response => {
      console.log(userValue);
      return dispatch(registrationSuccess(response));
    })
    .catch(error => dispatch(registrationError(error)));
};
