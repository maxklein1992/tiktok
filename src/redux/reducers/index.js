import { combineReducers } from "redux";

import contents from "./contents";
import likes from "./likes";
import comments from "./comments";
import user from "./user";

const rootReducer = combineReducers({ user, likes, comments, contents });

export default rootReducer;
