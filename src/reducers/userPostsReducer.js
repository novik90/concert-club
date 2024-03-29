const userPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_USER_POSTS":
            return action.payload;
        default:
            return state;
    }
};

export default userPostsReducer;
