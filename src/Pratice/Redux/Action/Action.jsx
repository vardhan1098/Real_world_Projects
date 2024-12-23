export const PRODUCT_RESPONSE = "PRODUCT_RESPONSE";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

export const Product_Response = () => {
  return { type: PRODUCT_RESPONSE };
};

export const Product_Success = (data) => {
  return { type: PRODUCT_SUCCESS, payload: data };
};

export const Product_Failure = (error) => {
  return { type: PRODUCT_FAILURE, payload: error };
};

export const FetchProducts = () => {
  return async (dispatch) => {
    dispatch(Product_Response());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network is Failed..");
      }
      const data = await response.json();
      dispatch(Product_Success(data));
    } catch (error) {
      dispatch(Product_Failure(error.message));
    }
  };
};
