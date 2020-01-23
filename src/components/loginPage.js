import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";
import { setCookie } from "../utils/cookies";
import { loadState } from "../services/connectivity/localStorage";
import { bindActionCreators } from "redux";
import { requestApiData } from "../actions/authenticationActions";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password
    };

    // this.props.dispatch(loginUserAction(data));
    this.props.loginUserAction(data);
  };

  componentDidMount() {
    document.title = "Login";
    this.props.requestApiData();
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

  person = (x, i) => (
    <div>
      <h1>{x.name.first}</h1>
      {/* <h1>{x.password}</h1> */}
    </div>
  );

  render() {
    // localStorage.clear();
    // const stateLocal = loadState();
    // console.log("Last Token from Component: " + loadState());
    // if (stateLocal !== undefined) {
    //   console.log("do something in component login");
    // } else {
    //   console.log("totally wrong on login");
    // }
    const { results = [] } = this.props.data;
    return (
      <div>
        <h3>Login Page</h3>
        {results.length ? (
          <small>{results.map(this.person)}</small>
        ) : (
          <small>loading..</small>
        )}
        {/* {loadState() !== undefined && <Redirect to="dashboard" />} */}
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

// const mapStateToProps = (response, state) => ({ response, data: state.data });
function mapStateToProps(state, response) {
  const data = state.data;

  // component receives additionally:
  return { data, response };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, loginUserAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
