export const loginService = request => {
  const LOGIN_API_ENDPOINT = process.env.REACT_APP_API_URL_LOGIN;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      const isSuccess = response.status >= 200 && response.status < 300;
      if (isSuccess) {
        return response.json();
      }
    })
    .then(json => {
      return json;
    });
};
