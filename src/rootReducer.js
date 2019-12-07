import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import backdropReducer from './components/Backdrop/backdropReducer';
import { user, sessionReducer } from './redux/login/loginReducers';
import booksReducer from './redux/books/booksReducer';
import { resultsReducer } from './redux/results/resultsReducers';

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
  pagesReadResult: resultsReducer,
});

export default rootReducer;
