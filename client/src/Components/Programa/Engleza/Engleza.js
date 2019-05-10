import React from "react";
import styles from "./Engleza.module.css";
import NavBar from "../../NavBar/NavBar";

const ProgramaEngleza = () => {
  return (
    <div className={styles.ProgramaEngleza}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      Programa Engleza
    </div>
  );
};

export default ProgramaEngleza;
