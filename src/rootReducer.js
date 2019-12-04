import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import backdropReducer from './components/Backdrop/backdropReducer';
import { user, sessionReducer } from './redux/login/loginReducers';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  user,
  session: persistReducer(sessionPersistConfig, sessionReducer),
  isModalOpen: backdropReducer,
});

export default rootReducer;
