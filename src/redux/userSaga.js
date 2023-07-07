import { takeEvery, put, call } from "redux-saga/effects";
import {
  SET_USER_LIST,
  USER_LIST,
  SET_USER_PROFILE,
  USER_PROFILE,
  EDIT_PROFILE,
} from "./constant";
/** takeEvery will call any saga func whenever they get any TYPE
 * put is used to send this data back to Reducer.
 */

function* getUsers() {
  let data = yield fetch("https://dummyjson.com/users");
  data = yield data.json();
  console.warn("action is called in userSaga", data.users);
  yield put({ type: SET_USER_LIST, data });
}

function* showUserProfile(userData) {
  console.log(userData.id);
  let result = yield fetch(`https://dummyjson.com/users/${userData.id}`);
  result = yield result.json();
  console.warn("action is called FOR PROFILE", result);
  yield put({ type: SET_USER_PROFILE, data: result });
}

// function* editUserProfile(userData) {
//   console.log(userData.id);
//   let result = yield put(`https://dummyjson.com/users/${userData.id}`);
//   result = yield result.json();
//   console.log("resu", result);
//   console.warn("action is called FOR PROFILE", result);
//   yield put({ type: SET_USER_PROFILE, data: result });
// }

function* editUserProfile(userData) {
  console.log(userData.id);
  console.log(userData.profileData);
  try {
    // Make the PUT request to update user profile
    const response = yield call(
      fetch,
      `https://dummyjson.com/users/${userData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData.profileData),
      }
    );

    // Parse the response as JSON
    const result = yield response.json();
    console.log("resu", result);

    console.warn("Action is called FOR PROFILE", result);

    // Dispatch an action to update the user profile in the Redux store
    yield put({ type: SET_USER_PROFILE, data: result });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error updating user profile:", error);
    // Dispatch an action to handle the error in the Redux store
    // yield put({ type: UPDATE_USER_PROFILE_ERROR, error: error.message });
  }
}

function* userSaga() {
  yield takeEvery(USER_LIST, getUsers);
  yield takeEvery(USER_PROFILE, showUserProfile);
  yield takeEvery(EDIT_PROFILE, editUserProfile);
}

export default userSaga;
