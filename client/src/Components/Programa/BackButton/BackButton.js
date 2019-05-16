import React from "react";
import styles from "./BackButton.module.css";
import { withRouter } from "react-router-dom";

const BackButton = props => {
  const next = to => {
    props.history.push(to);
  };
  return (
    <div className={styles.BackButton}>
      <button onClick={() => next(props.to)}>înapoi</button>
    </div>
  );
};

export default withRouter(BackButton);
