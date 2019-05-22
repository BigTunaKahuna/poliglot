import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./Engleza.module.css";
import NavBar from "../../NavBar/NavBar";
import Plural from "./Plural/Plural";
import Introducere from "./Introducere/Introducere";
import Numere from "./Numere/Numere";
import { BrowserRouter as Router } from "react-router-dom";
import VerbeDeBaza from "./Verbe de baza/VerbeDeBaza";
import Pronume from "./Pronume/Pronume";
import Intrebari from "./Intrebari/Intrebari";
import Zile from "./Zile/Zile";
import Luni from "./Luni/Luni";
import Tari from "./Tari/Tari";
import PrezentSimplu from "./PrezentSimplu/PrezentSimplu";
import PrezentContinuu from "./PrezentContinuu/PrezentContinuu";
import TrecutSimplu from "./TrecutSimplu/TrecutSimplu";
import TrecutContinuu from "./TrecutContinuu/TrecutContinuu";
import PrezentPerfect from "./PrezentPerfect/PrezentPerfect";
import TrecutPerfect from "./TrecutPerfect/TrecutPerfect";

const ProgramaEngleza = () => {
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
                to="/limba/engleza/introducere"
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
                to="/limba/engleza/plural"
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
                to="/limba/engleza/verbe-de-baza"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Verbe de bază
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/numere"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Numere
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/pronume"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Pronume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/intrebari"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Întrebări
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/zile"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Zilele săptămânii
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/luni"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Lunile anului
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/tari-capitale-limbi-cetateni"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Țări/Capitale
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/prezent-simplu"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Prezent Simplu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/prezent-continuu"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Prezent Continuu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/trecut-simplu"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Trecut Simplu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/trecut-continuu"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Trecut Continuu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/prezent-perfect"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Prezent Perfect
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/limba/engleza/trecut-perfect"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}
              >
                Trecut Perfect
              </NavLink>
            </li>
          </ol>
          <Route
            exact
            path="/limba/engleza/introducere"
            render={() => (
              <div className={styles.SideBarContent}>
                <Introducere />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/plural"
            render={() => (
              <div className={styles.SideBarContent}>
                <Plural />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/verbe-de-baza"
            render={() => (
              <div className={styles.SideBarContent}>
                <VerbeDeBaza />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/numere"
            render={() => (
              <div className={styles.SideBarContent}>
                <Numere />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/pronume"
            render={() => (
              <div className={styles.SideBarContent}>
                <Pronume />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/intrebari"
            render={() => (
              <div className={styles.SideBarContent}>
                <Intrebari />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/zile"
            render={() => (
              <div className={styles.SideBarContent}>
                <Zile />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/luni"
            render={() => (
              <div className={styles.SideBarContent}>
                <Luni />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/tari-capitale-limbi-cetateni"
            render={() => (
              <div className={styles.SideBarContent}>
                <Tari />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/prezent-simplu"
            render={() => (
              <div className={styles.SideBarContent}>
                <PrezentSimplu />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/prezent-continuu"
            render={() => (
              <div className={styles.SideBarContent}>
                <PrezentContinuu />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/trecut-simplu"
            render={() => (
              <div className={styles.SideBarContent}>
                <TrecutSimplu />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/trecut-continuu"
            render={() => (
              <div className={styles.SideBarContent}>
                <TrecutContinuu />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/prezent-perfect"
            render={() => (
              <div className={styles.SideBarContent}>
                <PrezentPerfect />
              </div>
            )}
          />
          <Route
            exact
            path="/limba/engleza/trecut-perfect"
            render={() => (
              <div className={styles.SideBarContent}>
                <TrecutPerfect />
              </div>
            )}
          />
        </Router>
      </div>
    </div>
  );
};

export default ProgramaEngleza;
