import { combineReducers } from 'redux';
import { ActionType } from './loginActions';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  error,
});
