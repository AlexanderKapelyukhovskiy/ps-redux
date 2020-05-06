import { combineReducers } from "redux";
import courses from "./courceReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
