import * as types from "./actionTypes";
import * as authorsApi from "../../api/authorApi";

export function loadAuthorsSuccss(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorsApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccss(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
