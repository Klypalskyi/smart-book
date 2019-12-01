import { combineReducers } from 'redux';
import backdropReducer from './components/Backdrop/backdropReducer';

const rootReducer = combineReducers({
  isModalOpen: backdropReducer,
});

export default rootReducer;
