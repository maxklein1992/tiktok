import { combineReducers } from "redux";

import contents from "./contents";
import likes from "./likes";
import comments from "./comments";

const rootReducer = combineReducers({ likes, comments, contents });

export default rootReducer;
