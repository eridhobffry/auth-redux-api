import asyncFetch from "./async-fetch";
import { getBaseRequestConfig } from "./baseRequestConfig";

export async function login(username, password) {
  /* global API_BASE_URL */
  const url = process.env.REACT_APP_API_URL_LOGIN;

  const baseRequestConfig = getBaseRequestConfig();

  const requestConfig = Object.assign({}, baseRequestConfig, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  // const parameters = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(request.user)
  // };

  const response = await asyncFetch(url, requestConfig);

  return await response.json();
}
