import { combineReducers } from "redux";
import courses from "./courceReducer";
import authors from "./authorReducer";
import apiCallsInProgressReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgressReducer,
});

export default rootReducer;
