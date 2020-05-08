import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorsSuccss(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorsApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccss(authors));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
