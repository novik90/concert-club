import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userPostsReducer from "./userPostsReducer";

export default combineReducers({
    users: usersReducer,
    userPosts: userPostsReducer,
});
