import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_RESPONSE,
  FETCH_DATA_SUCCESS,
} from "../Actions/Action";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_RESPONSE:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: "" };

    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, products: [], error: action.payload };
    default:
      return state;
  }
}
