import React from "react";

import styles from "./Home.module.css";
import NavBar from "../Components/NavBar/NavBar";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.Slider}>
        <h1>Bine ați venit pe Poliglot!</h1>
        <h1>Locul unde poți învăța limbi străine eficient!</h1>
      </div>
    </div>
  );
};

export default Home;
