const userReducer = (state = "", action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_USER":
            return action.payload[0];
        default:
            return state;
    }
};

export default userReducer;
