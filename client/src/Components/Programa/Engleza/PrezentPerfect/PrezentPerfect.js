import React from "react";
import NextButton from "../../NextButton/NextButton";
import BackButton from "../../BackButton/BackButton";

const PrezentPerfect = () => {
  return (
    <div>
      <h2>
        Prezent Perfect (<span>Present Perfect</span>)
      </h2>
      <p>
        Prezentul perfect (Present Perfect) este folosit pentru a defini o
        acțiune care s-a întâmplat în trecut, dar care are legătură cu prezentul
        sau o acțiune obișnuită, regulată.
      </p>
      <h3>Formare</h3>
      <p>
        Forma afirmativă: <span>Subiect + have/has + Verb.</span>
      </p>
      <p>
        <span>I have learned this already. </span> (Deja am învățat asta.)
      </p>
      <p>
        <span>You have learned this already. </span>
      </p>
      <p>
        <span>He/She/It has learned this already. </span>
      </p>
      <p>
        <span>We have learned this already. </span>
      </p>
      <p>
        <span>You have learned this already. </span>
      </p>
      <p>
        <span>They have learned this already. </span>
      </p>
      <br />

      <p>
        Forma negativă: <span>Subiect + have/has + not + Verb.</span>
      </p>
      <p>
        <span>I have not learned this already. </span> (Nu am învățat asta
        deja.)
      </p>
      <p>
        <span>You have not learned this already. </span>
      </p>
      <p>
        <span>He/She/It has not learned this already. </span>
      </p>
      <p>
        <span>We have not learned this already. </span>
      </p>
      <p>
        <span>You have not learned this already. </span>
      </p>
      <p>
        <span>They have not learned this already. </span>
      </p>
      <br />

      <p>
        Forma interogativă: <span>Have/Has + Subiect + Verb?</span>
      </p>
      <p>
        <span>Have I learned this already? </span> (Am învățat deja asta?)
      </p>
      <p>
        <span>Have you learned this already? </span>
      </p>
      <p>
        <span>Has He/She/It learned this already? </span>
      </p>
      <p>
        <span>Have we learned this already? </span>
      </p>
      <p>
        <span>Have you learned this already? </span>
      </p>
      <p>
        <span>Have they learned this already? </span>
      </p>
      <BackButton to="trecut-continuu" />
      <NextButton to="trecut-perfect" />
    </div>
  );
};

export default PrezentPerfect;
