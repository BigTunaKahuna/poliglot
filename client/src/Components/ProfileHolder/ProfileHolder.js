import React, { useState } from "react";
import styles from "./ProfileHolder.module.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

const ProfileHolder = props => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [email, setEmail] = useState("");

  axios
    .get("http://localhost:5000/api/profile/" + document.cookie.slice(3), {
      withCredentials: true
    })
    .then(profile => {
      setUsername(profile.data.user.userName);
      setScore(profile.data.user.score);
      setEmail(profile.data.user.email);
    })
    .catch(err => console.log(err));

  const logout = () =>
    axios
      .get("http://localhost:5000/api/auth/logout", {
        withCredentials: true
      })
      .then(() => {
        props.history.push("/");
        document.location.reload();
      });

  return (
    <div className={styles.ProfileHolder}>
      <div className={styles.ProfileInformation}>
        <p>
          Bine ați venit <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
      </div>
      <div className={styles.Logout}>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default withRouter(ProfileHolder);
