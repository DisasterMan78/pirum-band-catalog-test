import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import reducer, { initialState } from '../reducers';

const environment = process.env.REACT_APP_ENVIRONMENT,
      middlewares = (environment === 'PRODUCTION' || environment === 'TEST') ? [thunk] : [thunk, logger],
      store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middlewares),
      );

export default store;
