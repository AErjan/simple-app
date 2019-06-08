import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_COMPLETE,
  FETCH_POSTS_ERROR,
} from '../constants';

const initialState = {
  posts: [],
  loading: false,
  success: false,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED: {
      return { ...state, loading: true };
    }
    case FETCH_POSTS_COMPLETE: {
      return { ...state, loading: false, success: true, posts: action.payload };
    }
    case FETCH_POSTS_ERROR: {
      return { ...state, error: true };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
