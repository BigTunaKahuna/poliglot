import React from "react";

import styles from "./Register.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className={styles.Register}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.RegisterForm}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
