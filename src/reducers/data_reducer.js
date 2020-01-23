import * as types from "../general/constants";

export default (state = {}, { type, data }) => {
  switch (type) {
    case types.RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};
