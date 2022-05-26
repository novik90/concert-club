const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_COMMENTS":
            return action.payload;
        default:
            return state;
    }
};

export default commentsReducer;
