import { combineReducers } from 'redux';
import backdropReducer from './components/Backdrop/backdropReducer';
import sessionReducer from './redux/login/loginReducers';

import registrationReducer from './redux/registration/registrationReducer';

const rootReducer = combineReducers({
  user: registrationReducer,
  session: sessionReducer,
  isModalOpen: backdropReducer,
});

export default rootReducer;
