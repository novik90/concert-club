import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import userPostsReducer from "./userPostsReducer";
import userReducer from "./userReducer";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";

export default combineReducers({
    users: usersReducer,
    user: userReducer,
    userPosts: userPostsReducer,
    comments: commentsReducer,
    post: postReducer,
});
