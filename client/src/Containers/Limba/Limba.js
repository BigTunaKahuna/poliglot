import React from "react";
import styles from "./Limba.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Limba = () => {
  return (
    <div className={styles.Limba}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.Limbi}>
        <NavLink to="/limba/engleza/introducere" className={styles.Engleza}>
          Engleză
        </NavLink>

        <NavLink to="/limba/germana/introducere" className={styles.Germana}>
          Germană
        </NavLink>
      </div>
    </div>
  );
};

export default Limba;
