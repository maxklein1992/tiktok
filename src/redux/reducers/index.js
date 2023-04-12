import { combineReducers } from "redux";

import contents from "./contents.tsx";
import likes from "./likes.tsx";
import comments from "./comments.tsx";
import user from "./user.tsx";

const rootReducer = combineReducers({ user, contents, likes, comments });

export default rootReducer;
