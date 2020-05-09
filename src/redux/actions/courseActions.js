import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCoursesSuccss(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function deleteCourseOptimistic(courseId) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, courseId };
}

export function deleteCourse(courseId) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(courseId));
    return courseApi.deleteCourse(courseId);
  };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccss(courses));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveCourse(course) {
  // eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
