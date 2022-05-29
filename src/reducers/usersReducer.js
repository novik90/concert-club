const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOADING":
            return false;
        case "FETCH_USERS":
            return action.payload;
        default:
            return state;
    }
};

export default usersReducer;
