import { put, call } from "redux-saga/effects";
import {
  // registerUserService,
  loginUserService
} from "../services/authServices";

import forwardTo from "../helpers/forward_location";
import * as api from "../services/connectivity/api.auth";

import {
  loginRequestSuccess,
  loginRequestError
} from "../actions/authenticationActions";
import * as types from "../general/constants";
import { saveState, loadState } from "../services/connectivity/localStorage";

// export function* registerSaga(payload) {
//   try {
//     const response = yield call(registerUserService, payload);
//     yield [
//       put({ type: types.REGISTER_USER_SUCCESS, response })
//     ];
//   } catch(error) {
//     yield put({ type: types.REGISTER_USER_ERROR, error });
//   }
// }

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    if (response.success) {
      saveState(response);
    }
    console.log(loadState().token);
    // yield put(loginRequestSuccess(response, payload.hash));
  } catch (error) {
    // yield put(loginRequestError(error.reasonKey));
    yield put({ type: types.LOGIN_USER_ERROR, error });
  } finally {
    yield [put({ type: types.LOGIN_USER_SUCCESS, sending: false })];
    // forwardTo("/dashboard");
  }
}

// export function* logout() {
//   // We tell Redux we're in the middle of a request
//   yield put({ type: SENDING_REQUEST, sending: true });

//   // Similar to above, we try to log out by calling the `logout` function in the
//   // `auth` module. If we get an error, we send an appropiate action. If we don't,
//   // we return the response.
//   try {
//     const response = yield call(auth.logout);
//     yield put({ type: SENDING_REQUEST, sending: false });

//     return response;
//   } catch (error) {
//     yield put({ type: REQUEST_ERROR, error: error.message });
//   }
// }
