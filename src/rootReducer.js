import { combineReducers } from 'redux';
import sessionReducer from './redux/login/loginReducers';

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
