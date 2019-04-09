import React from "react";

import styles from "./Home.module.css";
import NavBar from "../Components/NavBar/NavBar";

const Home = () => (
  <div className={styles.Home}>
    <NavBar />
    <p>Hello from home</p>
  </div>
);

export default Home;
