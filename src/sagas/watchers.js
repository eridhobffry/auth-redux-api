import { takeLatest } from "redux-saga/effects";
import {
  // registerSaga,
  loginSaga
} from "./authenticationSaga";
import { getApiData } from "./data_saga";
import * as types from "../general/constants";

export default function* watchUserAuthentication() {
  // yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.REQUEST_API_DATA, getApiData);
}
