const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_USER":
            return action.payload;
        default:
            return state;
    }
};

export default commentsReducer;
