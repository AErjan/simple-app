import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

const roodReducer = combineReducers({ usersReducer, postsReducer });

export default roodReducer;
