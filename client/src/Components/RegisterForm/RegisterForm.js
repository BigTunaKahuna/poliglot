import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import styles from "./RegisterForm.module.css";

const RegisterForm = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [checkButton, setCheckButton] = useState(false);
  // Border color in case of misusing
  const [usernameBorder, setUsernameBorder] = useState("");
  const [passwordBorder, setPasswordBorder] = useState("");
  const [confPasswordBorder, setConfPasswordBorder] = useState("");
  const [emailBorder, setEmailBorder] = useState("");

  // Custom error message
  const [userErr, setUserErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confPasswordErr, setConfPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // Handle change and validate input based on change
  let handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let regexEmail = /(^\S+)@(\S+[^@]$)/gi;
    const valid = () => setCheckButton(false);
    const invalid = () => setCheckButton(true);

    switch (name) {
      case "username":
        setUsername(value);
        if (!value || value.length < 5) {
          return [
            invalid(),
            setUsernameBorder("red"),
            setUserErr("Minim 5 caractere")
          ];
        }
        return [valid(), setUsernameBorder(""), setUserErr("")];

      case "password":
        setPassword(value);
        if (!value || value.length < 5)
          return [
            invalid(),
            setPasswordBorder("red"),
            setPasswordErr("Minim 5 caractere")
          ];
        else return [valid(), setPasswordBorder(""), setPasswordErr("")];

      case "confPassword":
        setConfPassword(value);
        if (value !== password) {
          return [
            invalid(),
            setConfPasswordBorder("red"),
            setConfPasswordErr("Parolele nu coincid")
          ];
        }
        return [valid(), setConfPasswordBorder(""), setConfPasswordErr("")];

      case "email":
        setEmail(value);
        if (!regexEmail.test(value)) {
          return [
            invalid(),
            setEmailBorder("red"),
            setEmailErr("Email invalid")
          ];
        }
        return [valid(), setEmailBorder(""), setEmailErr("")];

      default:
        break;
    }
  };

  // POST request to register user
  let handleFormSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/register", {
        userName: username,
        password: password,
        confPassword: confPassword,
        email: email
      }) //TODO: Push to account created page
      .then(props.history.push("/login"))
      .catch(
        err => setErrMsg(err.request.response.replace(/"/gi, " ").trim()),
        setCheckButton(true)
      );
  };

  return (
    <div className={styles.RegisterForm}>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
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
        <label htmlFor="confPassword">
          Confirmați parola: {confPasswordErr}
        </label>
        <input
          value={confPassword}
          type="password"
          id="confPassword"
          name="confPassword"
          required
          placeholder="Reintroduceți parola"
          spellCheck="false"
          onChange={handleChange}
          style={{ borderColor: confPasswordBorder }}
        />
        <label htmlFor="email">Email: {emailErr}</label>
        <input
          value={email}
          type="email"
          id="email"
          name="email"
          required
          placeholder="Introduceți email-ul"
          spellCheck="false"
          onChange={handleChange}
          style={{ borderColor: emailBorder }}
        />

        <button
          disabled={checkButton}
          type="submit"
          onSubmit={handleFormSubmit}
        >
          Register
        </button>
      </form>
      <div className={styles.ErrorMsg}>{errMsg}</div>
    </div>
  );
};

export default withRouter(RegisterForm);
