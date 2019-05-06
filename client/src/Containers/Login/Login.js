import React from "react";

import styles from "./Login.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.LoginForm}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
