import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";
import { setCookie } from "../utils/cookies";
import { loadState } from "../services/connectivity/localStorage";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password
    };

    this.props.dispatch(loginUserAction(data));
  };

  isAuth = () => {
    const URL = "https://api.supirin-yuk.com/gateway/web/login";
    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(function(response) {
      console.log("hallo, ini adalah response nya - " + response.success);
    });
  };

  componentDidMount() {
    document.title = "Login";
    // this.isAuth();
    // 	const URL = 'ttps://api.supirin-yuk.com/gateway/web/login';
    // fetch(URL)
    //   .then(res => {
    // 		const isSuccess = res.status >= 200 && res.status < 300;
    // 		const message = res.login.res.message;
    // 		if (isSuccess) {
    // 			setCookie("token", response.token, 1);
    // 		}
    // 	})

    //   .catch(err => console.log(err));
  }

  render() {
    // localStorage.clear();
    // const stateLocal = loadState();
    // console.log("Last Token from Component: " + loadState());
    // if (stateLocal !== undefined) {
    //   console.log("do something in component login");
    // } else {
    //   console.log("totally wrong on login");
    // }
    return (
      <div>
        <h3>Login Page</h3>

        {/* {!stateLocal.success ? (
          <div>{stateLocal.message}</div>
        ) : (
          <Redirect to="dashboard" />
        )} */}

        {loadState() !== undefined && <Redirect to="dashboard" />}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        {/* Don't have account? <Link to="register">Register here</Link> */}
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(LoginPage);
