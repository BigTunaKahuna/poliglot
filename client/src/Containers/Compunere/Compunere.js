import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { NavLink, Route } from "react-router-dom";

import NavBar from "../../Components/NavBar/NavBar";
import styles from "./Compunere.module.css";
import AllMessages from "../../Components/Messages/AllMessages/AllMessages";
import AddMessage from "../../Components/Messages/AddMessage/AddMessage";

const Compunere = () => {
  return (
    <div className={styles.Compunere}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>

      <div className={styles.Main}>
        <Router>
          <NavLink
            to="/compunere/toate"
            style={{ fontSize: "1.5em", paddingRight: "5vw" }}
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
            Toate mesajele
          </NavLink>
          <NavLink
            to="/compunere/adauga"
            style={{ fontSize: "1.5em", paddingLeft: "5vw" }}
            activeStyle={{
              fontWeight: "bold",
              color: "green"
            }}
          >
            Adaugă mesaj
          </NavLink>
          <Route
            exact
            path="/compunere/toate"
            render={() => (
              <div>
                <AllMessages />
              </div>
            )}
          />
          <Route
            exact
            path="/compunere/adauga"
            render={() => (
              <div>
                <AddMessage />
              </div>
            )}
          />
        </Router>
      </div>
    </div>
  );
};

export default Compunere;
