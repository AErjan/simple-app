import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import roodReducer from '../reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(roodReducer, enhancer);

export default store;
