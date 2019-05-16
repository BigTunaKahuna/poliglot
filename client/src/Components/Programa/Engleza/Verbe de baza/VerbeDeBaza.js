import React from "react";
import styles from "./VerbeDeBaza.module.css";

import NextButton from "../../NextButton/NextButton";
import BackButton from "../../BackButton/BackButton";

const VerbeDeBaza = () => {
  return (
    <div className={styles.VerbeDeBaza}>
      <h2>Verbe de bază</h2>
      <p>
        Sunt trei verbe care sunt foarte importante în formarea propozițiilor
        sau frazelor și anume verbele <span>a fi </span>,<span>a avea </span>și{" "}
        <span> a face </span> echivalentul lor în engleză fiind{" "}
        <span> to be</span>,<span> to have</span> și respectiv{" "}
        <span>to do</span>.
      </p>
      <p>
        În continuare vom conjuga verbele de mai sus și forma propoziții cu ele!
      </p>
      <br />
      <div className={styles.Container}>
        <div className={styles.Engleza}>
          <p>ENG To be:</p>
          <p>
            <span>I am</span> Cosmin.
          </p>
          <p>
            <span>You are</span> Cosmin.
          </p>
          <p>
            <span>He/She/It is</span> Cosmin.
          </p>
          <p>
            <span>We are</span> Cosmin and Andrei.
          </p>
          <p>
            <span>You are</span> Cosmin and Andrei.
          </p>
          <p>
            <span>They are</span> Cosmin and Andrei.
          </p>
        </div>

        <div className={styles.Romana}>
          <p>RO A fi:</p>
          <p>
            <span>Eu sunt</span> Cosmin.
          </p>
          <p>
            <span>Tu ești</span> Cosmin.
          </p>
          <p>
            <span>El/Ea/El este</span> Cosmin.
          </p>
          <p>
            <span>Noi suntem</span> Cosmin și Andrei.
          </p>
          <p>
            <span>Voi sunteți</span> Cosmin și Andrei.
          </p>
          <p>
            <span>Ei sunt</span> Cosmin și Andrei.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.Container}>
        <div className={styles.Engleza}>
          <p>ENG To have:</p>
          <p>
            <span>I have</span> a house.
          </p>
          <p>
            <span>You have</span> a house.
          </p>
          <p>
            <span>He/She/It has</span> a house.
          </p>
          <p>
            <span>We have</span> a house.
          </p>
          <p>
            <span>You have</span> a house.
          </p>
          <p>
            <span>They have</span> a house.
          </p>
        </div>

        <div className={styles.Romana}>
          <p>RO A avea:</p>
          <p>
            <span>Eu am</span> o casă.
          </p>
          <p>
            <span>Tu ai</span> o casă.
          </p>
          <p>
            <span>El/Ea/El are</span> o casă.
          </p>
          <p>
            <span>Noi avem</span> o casă.
          </p>
          <p>
            <span>Voi aveți</span> o casă.
          </p>
          <p>
            <span>Ei au</span> o casă.
          </p>
        </div>
      </div>
      <br />
      <div className={styles.Container}>
        <div className={styles.Engleza}>
          <p>ENG To do:</p>
          <p>
            <span>I do my </span> homework.
          </p>
          <p>
            <span>You do your</span> homework.
          </p>
          <p>
            <span>He/She does his/her</span> homework.
          </p>
          <p>
            <span>We do our</span> homework.
          </p>
          <p>
            <span>You do your</span> homework.
          </p>
          <p>
            <span>They do their</span> homework.
          </p>
        </div>
        <div className={styles.Romana}>
          <p>RO A face:</p>
          <p>
            <span>Eu îmi fac</span> tema.
          </p>
          <p>
            <span>Tu îți faci</span> tema.
          </p>
          <p>
            <span>El/Ea își face</span> tema.
          </p>
          <p>
            <span>Noi ne facem</span> tema.
          </p>
          <p>
            <span>Voi vă faceți</span> tema.
          </p>
          <p>
            <span>Ei își fac</span> tema.
          </p>
        </div>
      </div>

      <BackButton to="plural" />
      <NextButton to="numere" />
    </div>
  );
};

export default VerbeDeBaza;
