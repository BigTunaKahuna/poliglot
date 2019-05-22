import React from "react";
import BackButton from "../../BackButton/BackButton";

const TrecutPerfect = () => {
  return (
    <div>
      <h2>
        Trecut Perfect (<span>Past Perfect</span>)
      </h2>
      <p>
        Trecutul perfect este folosit pentru a exprima o stare sau o acțiune
        care a început într-un moment din trecut şi s-a desfăşurat neîntrerupt
        şi continuu până la un moment dat tot în trecut sau o acţiune care a
        început într-un moment din trecut şi s-a desfăşurat până la începerea
        unei alte acţiuni.
      </p>
      <h3>Formare</h3>
      <p>
        <span>Subiect + had been + Verb-ing</span>
      </p>
      <p>
        <span>I had been going to school for 5 years.</span>
      </p>
      <BackButton to="prezent-perfect" />
    </div>
  );
};

export default TrecutPerfect;
