import { compareSync } from "bcryptjs";
// export const registerUserService = (request) => {
//   const REGISTER_API_ENDPOINT = process.env.REACT_APP_API_URL_REGISTER

//   const parameters = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(request.user)
//   };

//   return fetch(REGISTER_API_ENDPOINT, parameters)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       return json;
//     });
// };

export const loginUserService = request => {
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
      // const userExists = !request.user.username === undefined;
      // if (
      //   userExists &&
      //   compareSync(request.user.password, request.user.username)
      // ) {
      //   return response.json();
      // } else {
      //   if (userExists) {
      //     throw new Error("Wrong password");
      //   } else {
      //     throw new Error("User doesn't exist");
      //   }
      // }

      // simple return
      //
      return response.json();
    })
    .then(json => {
      return json;
    });
};
