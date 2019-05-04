import React from "react";

import styles from "./Login.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      {/*<div className={styles.RegisterForm}>
        <RegisterForm />
  </div>*/}
      <div className={styles.LoginForm}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
