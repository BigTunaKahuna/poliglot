import React from "react";

import styles from "./Profile.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import ProfileHolder from "../../Components/ProfileHolder/ProfileHolder";

const Login = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.ProfileHolder}>
        <ProfileHolder />
      </div>
    </div>
  );
};

export default Login;
