import { put, call } from "redux-saga/effects";
import {
  // registerUserService,
  loginUserService
} from "../services/authServices";
import {
  loginRequestSuccess,
  loginRequestError
} from "../actions/authenticationActions";
import * as types from "../general/constants";

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
    // yield put(loginRequestSuccess(response, payload.hash));
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
  } catch (error) {
    yield put(loginRequestError(error.reasonKey));
    // yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
