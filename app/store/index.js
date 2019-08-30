import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import defaultState from './state';
import reducer from './reducers';

const initializeStore = (state = defaultState) => {
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
  );
};

export default initializeStore;
