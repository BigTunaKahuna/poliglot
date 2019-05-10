import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import combineClass from "classnames";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

import styles from "./NavBar.module.css";
import Logo from "./Logo/Logo";

const NavBar = props => {
  const [hamburger, setHamburger] = useState([styles.Hamburger]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => props.checkAuth());

  const toggleHam = () => {
    if (clicked) {
      setHamburger([styles.Hamburger]);
      setClicked(false);
    } else {
      setHamburger([hamburger, styles.Change]);
      setClicked(true);
    }
  };

  let hamburgerMenu = (
    <div
      className={styles.HamburgerMenu}
      style={clicked ? { opacity: 1 } : { opacity: 0 }}
    >
      {/* Trigger display onClick with good performance */}
      <nav style={clicked ? { display: "block" } : { display: "none" }}>
        <ul>
          <li>
            <NavLink exact to="/">
              Acasă
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink exact to="/limba">
              Limbă
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink exact to="/compunere">
              Compunere
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink exact to="/login">
              Intră în cont
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

  let menuNav = (
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
  );

  if (props.loggedIn) {
    menuNav = (
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
              <NavLink exact to="/profile">
                Profilul meu
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );

    hamburgerMenu = (
      <div
        className={styles.HamburgerMenu}
        style={clicked ? { opacity: 1 } : { opacity: 0 }}
      >
        {/* Trigger display onClick with good performance */}
        <nav style={clicked ? { display: "block" } : { display: "none" }}>
          <ul>
            <li>
              <NavLink exact to="/">
                Acasă
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink exact to="/limba">
                Limbă
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink exact to="/compunere">
                Compunere
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink exact to="/profile">
                Profilul meu
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <div className={combineClass(hamburger)} onClick={toggleHam}>
        <div className={styles.Bar1} />
        <div className={styles.Bar2} />
        <div className={styles.Bar3} />
      </div>

      {hamburgerMenu}
      {menuNav}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => {
      dispatch(actions.authCheck());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
