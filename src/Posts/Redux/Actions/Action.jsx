export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}

export function fetchPostsSuccess(posts) {
  return { type: FETCH_POSTS_SUCCESS, payload: posts };
}

export function fetchPostsFailure(error) {
  return { type: FETCH_POSTS_FAILURE, payload: error };
}

export const fetchPosts = () =>{
    return async(dispatch) =>{
        dispatch(fetchPostsRequest());
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!response.ok){
                throw new Error ("Network is Failed..")
            }
            const data = await response.json();
            dispatch(fetchPostsSuccess(data))
        }catch (error ){
            dispatch(fetchPostsFailure(error.message))
        }
    }
}
