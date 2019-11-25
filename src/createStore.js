import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'
import logger from 'redux-logger';

const middlewares = [thunk, logger]

export default store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));