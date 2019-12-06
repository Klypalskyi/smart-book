import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares =
  process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
