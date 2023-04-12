import { combineReducers } from "redux";

import contents from "./contents";
import likes from "./likes";
import comments from "./comments";
import user from "./user";

const rootReducer = combineReducers({ user, contents, likes, comments });

export default rootReducer;
