import React, { useState, useEffect } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./LoginForm.module.css";
import * as actions from "../../store/actions/auth";

const LoginForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkButton, setCheckButton] = useState(false);

  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [err, setErr] = useState("");

  const [passwordBorder, setPasswordBorder] = useState("");
  const [usernameBorder, setUsernameBorder] = useState("");

  // const handleLogin = e => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "http://localhost:5000/api/auth/login",
  //       {
  //         username: username,
  //         password: password
  //       },
  //       { withCredentials: true }
  //     )
  //     .then(x => {
  //       if (x.status === 200) {
  //         props.history.push("/");
  //       } else {
  //         setErr("Nume sau parolă greșită");
  //         setCheckButton(true);
  //       }
  //     })
  //     .catch(setErr("Nume sau parolă greșită"), setCheckButton(true));
  // };

  const handleLogin = e => {
    e.preventDefault();
    props.onAuth(username, password);
  };

  useEffect(() => {
    if (props.error === true) {
      setErr("Nume sau parolă greșită");
      setCheckButton(true);
    }
  });

  let handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;

    const valid = () => setCheckButton(false);
    const invalid = () => setCheckButton(true);

    switch (name) {
      case "username":
        setUsername(value);
        if (!value) {
          return [
            invalid(),
            setUsernameBorder("red"),
            setUserErr("Introduceți numele")
          ];
        }
        return [
          props.setErrBool(),
          valid(),
          setUsernameBorder(""),
          setUserErr(""),
          setErr("")
        ];

      case "password":
        setPassword(value);
        if (!value)
          return [
            props.setErrBool(),
            invalid(),
            setPasswordBorder("red"),
            setPasswordErr("Introduceți parola")
          ];
        return [
          props.setErrBool(),
          valid(),
          setPasswordBorder(""),
          setPasswordErr(""),
          setErr("")
        ];
      default:
        break;
    }
  };

  let authRedirect = null;
  if (props.loggedIn) {
    authRedirect = <Redirect to={props.pathRedir} />;
  }
  console.log();

  return (
    <div className={styles.LoginForm}>
      {authRedirect}
      <h2>Login</h2>

      <form method="post" onSubmit={handleLogin}>
        <label>{err}</label>
        <label htmlFor="username">Username: {userErr}</label>
        <input
          value={username}
          type="text"
          id="username"
          name="username"
          required
          placeholder="Introduceți username"
          spellCheck="false"
          onChange={handleChange}
          style={{ borderColor: usernameBorder }}
        />
        <label htmlFor="password">Parolă: {passwordErr}</label>
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          required
          placeholder="Introduceți parola"
          spellCheck="false"
          onChange={handleChange}
          style={{ borderColor: passwordBorder }}
        />
        <button disabled={checkButton} type="submit" onSubmit={handleLogin}>
          Login
        </button>
      </form>

      <div className={styles.CreateAccount}>
        <NavLink to="/register">Nu ai cont?</NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.auth.error,
    pathRedir: state.auth.path
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password, props) => {
      dispatch(actions.auth(username, password));
    },
    setErrBool: () => {
      dispatch(actions.setErrBool());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
