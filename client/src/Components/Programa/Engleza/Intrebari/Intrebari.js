import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Intrebari = () => {
  return (
    <div>
      <h2>Întrebări</h2>
      <p>
        Următoarele cuvinte sunt folosite pentru a forma întrebări în limba
        engleză: <span>When?</span> (Când?) <span>Where?</span> (Unde?){" "}
        <span>What?</span> (Ce/Care?) <span>Which?</span> (Care?){" "}
        <span>Who?</span> (Cine?) <span>How?</span> (Cum?).
      </p>
      <p>
        De reținut faptul că se va inversa auxiliarul cu pronumele în loc de{" "}
        <span>I am</span> va fi <span>Am I</span>, <span>You are</span> va fi{" "}
        <span>Are you</span>
      </p>
      <p>Exemplu:</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>
            <span>Where</span> are you from?
          </p>
          <p>
            <span>What</span> is your name?
          </p>
          <p>
            <span>When</span> is your birthday?
          </p>
          <p>
            <span>Which</span> book did you enjoy the most?
          </p>
          <p>
            <span>How</span> do I get to the bus station?
          </p>
        </div>
        <div>
          <p>
            De <span>unde</span> ești?
          </p>
          <p>
            <span>Care</span> este numele tău.
          </p>
          <p>
            <span>Când</span> este ziua ta?
          </p>
          <p>
            <span>Care</span> carte ți-a plăcut cel mai mult?
          </p>
          <p>
            <span>Cum</span> ajung la stația de autobuz?
          </p>
        </div>
      </div>
      <BackButton to="/limba/engleza/pronume" />
      <NextButton to="/limba/engleza/zile" />
    </div>
  );
};

export default Intrebari;
