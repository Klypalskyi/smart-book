import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginError,
} from '../redux/login/loginActions';

axios.defaults.baseURL = 'https://book-read.goit.co.ua/api/v1';

const login = credentials => dispatch => {
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

export default login;
