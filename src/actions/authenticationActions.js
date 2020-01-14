import * as types from "../general/constants";

export const loginUserAction = user => {
  return {
    type: types.LOGIN_USER,
    user
  };
};

export const loginRequestSuccess = (response, hash = "") => ({
  type: types.LOGIN_USER_SUCCESS,
  response,
  hash
});

export const loginRequestError = errorReasonkey => ({
  type: types.LOGIN_USER_ERROR,
  errorReasonkey
});

// export const registerUserAction = (user) => {
//   return {
//     type: types.REGISTER_USER,
//     user
//   }
// };
