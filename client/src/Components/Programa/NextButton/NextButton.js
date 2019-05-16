import React from "react";
import styles from "./NextButton.module.css";
import { withRouter } from "react-router-dom";

const NextButton = props => {
  const next = to => {
    props.history.push(to);
  };
  return (
    <div className={styles.NextButton}>
      <button onClick={() => next(props.to)}>înainte</button>
    </div>
  );
};

export default withRouter(NextButton);
