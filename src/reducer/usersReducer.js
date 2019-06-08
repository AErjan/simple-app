import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_COMPLETE,
  FETCH_USERS_ERROR,
} from '../constants';

const initialState = {
  users: [],
  loading: false,
  success: false,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return { ...state, loading: true, success: false };
    }
    case FETCH_USERS_COMPLETE: {
      return { ...state, loading: false, success: true, users: action.payload };
    }
    case FETCH_USERS_ERROR: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
