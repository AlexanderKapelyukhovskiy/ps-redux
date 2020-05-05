import { createStore } from "redux";
import rootReducer from "./reducers";

export default function confugureStore(initialState) {
  return createStore(rootReducer, initialState);
}
