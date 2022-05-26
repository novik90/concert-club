import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await jsonPlaceholder.get("/users");
    dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const fetchUserPosts = (userId) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await jsonPlaceholder.get(`/posts?userId=${userId}`);
    dispatch({ type: "FETCH_USER_POSTS", payload: response.data });
};

export const fetchUser = (userId) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await jsonPlaceholder.get(`/users?id=${userId}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchComments = (postId) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await jsonPlaceholder.get(`/comments?postId=${postId}`);
    dispatch({ type: "FETCH_COMMENTS", payload: response.data });
};

export const fetchPost = (postId) => async (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = await jsonPlaceholder.get(`/posts?id=${postId}`);
    dispatch({ type: "FETCH_POST", payload: response.data });
};