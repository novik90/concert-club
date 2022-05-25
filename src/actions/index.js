import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchUsers = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/users");
    dispatch({ type: "FETCH_USERS", payload: response.data });
};

export const fetchUserPosts = (userId) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/posts?userId=${userId}`);
    dispatch({ type: "FETCH_USER_POSTS", payload: response.data });
};
