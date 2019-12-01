import { combineReducers } from 'redux';
import backdropReducer from './components/Backdrop/backdropReducer';
import sessionReducer from './redux/login/loginReducers';

const rootReducer = combineReducers({
  session: sessionReducer,
  isModalOpen: backdropReducer,
});

export default rootReducer;
