import { combineReducers } from "redux";
import register from "./register_reducer";
import login from "./login_reducer";
import data from "./data_reducer";

const rootReducer = combineReducers({
  // register,
  login,
  data
});

export default rootReducer;
