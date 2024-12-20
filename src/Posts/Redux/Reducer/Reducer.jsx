import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  fetchPostsSuccess,
} from "../Actions/Action";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { loading: false, posts: action.payload, error: "" };

    case FETCH_POSTS_FAILURE:
      return { loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};
