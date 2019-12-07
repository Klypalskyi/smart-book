import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import backdropReducer from './components/Backdrop/backdropReducer';
import { user, sessionReducer } from './redux/login/loginReducers';
import booksReducer from './redux/books/booksReducer';
import componentController from './redux/componentController/componentControllerReducer';
import goalReducer from './redux/goal/goalReducer';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  user,
  books: booksReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer),
  isModalOpen: backdropReducer,
  componentController,
  goal: goalReducer,
});

export default rootReducer;
