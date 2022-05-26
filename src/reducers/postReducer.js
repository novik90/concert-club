const postReducer = (state = "", action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_POST":
            return action.payload[0];
        default:
            return state;
    }
};

export default postReducer;
