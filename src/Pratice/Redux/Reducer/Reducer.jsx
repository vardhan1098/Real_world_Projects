import {
  PRODUCT_FAILURE,
  PRODUCT_RESPONSE,
  PRODUCT_SUCCESS,
} from "../Action/Action";

export const initialState = {
  products: [],
  loading: true,
  error: null,
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_RESPONSE:
      return { ...state, loading: true };

    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };

    case PRODUCT_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
