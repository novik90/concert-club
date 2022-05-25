const userPostsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_USER_POSTS":
            return [...state, action.payload];
        default:
            return state;
    }
};

export default userPostsReducer;
