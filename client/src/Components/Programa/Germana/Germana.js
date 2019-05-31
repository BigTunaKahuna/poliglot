import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "../Engleza/Engleza.module.css";
import NavBar from "../../NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Introducere from "../Engleza/Introducere/Introducere";
import Plural from "./Plural/Plural";
import Verbe from "./Verbe/Verbe";
import Zile from "./Zile/Zile";
import Luni from "./Luni/Luni";
import Anotimp from "./Anotimp/Anotimp";
import Directii from "./Directii/Directii";
import Substantiv from "./Substantiv/Substantiv";
import Vocabular from "./Vocabular/Vocabular";

const ProgramaGermana = () => {
  return (
    <div className={styles.ProgramaEngleza}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <div className={styles.SideBar}>
        <Router>
          <ol>
            <li>
              <NavLink
                to="/limba/germana/introducere"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Introducere
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/plural"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Plural
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/verbe"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Verbe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/zile"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Zile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/luni"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Luni
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/anotimp"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Anotimp
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/directii"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Direcții
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/substantiv"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Substantiv
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/germana/vocabular"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Vocabular
              </NavLink>
            </li>
          </ol>
          <Route
            exact
            path="/limba/germana/introducere"
            render={() => (
              <div className={styles.SideBarContent}>
                <Introducere />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/plural"
            render={() => (
              <div className={styles.SideBarContent}>
                <Plural />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/verbe"
            render={() => (
              <div className={styles.SideBarContent}>
                <Verbe />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/zile"
            render={() => (
              <div className={styles.SideBarContent}>
                <Zile />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/luni"
            render={() => (
              <div className={styles.SideBarContent}>
                <Luni />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/anotimp"
            render={() => (
              <div className={styles.SideBarContent}>
                <Anotimp />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/directii"
            render={() => (
              <div className={styles.SideBarContent}>
                <Directii />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/substantiv"
            render={() => (
              <div className={styles.SideBarContent}>
                <Substantiv />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/germana/vocabular"
            render={() => (
              <div className={styles.SideBarContent}>
                <Vocabular />
              </div>
            )}
          />
        </Router>
      </div>
    </div>
  );
};

export default ProgramaGermana;
