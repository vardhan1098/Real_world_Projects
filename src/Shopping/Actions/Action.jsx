export const FETCH_DATA_RESPONSE = "FETCH_DATA_RESPONSE";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export function fetchDataResponse() {
  return { type: FETCH_DATA_RESPONSE };
}

export function fetchDataSuccess(products) {
  return { type: FETCH_DATA_SUCCESS, payload: products };
}

export function fetchDataFailure(error) {
  return { type: FETCH_DATA_FAILURE, payload: error };
}


export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchDataResponse());
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network is Failed..');
            }
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};
