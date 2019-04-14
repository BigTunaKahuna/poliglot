import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import Logo from "./Logo/Logo";

const NavBar = () => (
  <div className={styles.NavBar}>
    <div className={styles.Logo}>
      <NavLink exact to="/">
        <Logo />
      </NavLink>
    </div>
    <div className={styles.Navigation}>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Acasă
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/limba">
              Limbă
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/compunere">
              Compunere
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/login">
              Intră în cont
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default NavBar;
