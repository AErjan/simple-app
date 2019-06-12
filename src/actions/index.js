import api from "../api";
import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_COMPLETE,
  FETCH_USERS_ERROR,
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_COMPLETE,
  FETCH_POSTS_ERROR
} from "../constants";

export const loadingUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_REQUESTED });

  api
    .get("users")
    .then(res => dispatch({ type: FETCH_USERS_COMPLETE, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERS_ERROR }));
};

export const loadingPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_REQUESTED });

  api
    .get("posts")
    .then(res => dispatch({ type: FETCH_POSTS_COMPLETE, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_POSTS_ERROR }));
};
