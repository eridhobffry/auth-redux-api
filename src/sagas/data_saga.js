import { call, put } from "redux-saga/effects";

import { receiveApiData } from "../actions/authenticationActions";
import { loginUserService } from "../services/authServices";
import { fetchData } from "../services/data_services";

export function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}
