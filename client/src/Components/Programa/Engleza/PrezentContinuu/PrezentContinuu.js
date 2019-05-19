import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const PrezentContinuu = () => {
  return (
    <div>
      <h2>Prezent continuu (Present Continuous)</h2>
      <p>
        Prezentul continuu este folosit pentru a exprima o acțiune care se
        întâmplă în prezent.
      </p>
      <h3>Formare</h3>
      <p>
        În propozițiile afirmative prezentul continuu se formează în modul
        următor:
      </p>
      <p>
        <span>Subiect + Verb auxiliar(to be) + verb-ing.</span>
      </p>
      <p>
        Pentru forma negativa se adaugă not după verbul auxiliar. Se poate
        folosi și forma prescurtată precum <span>aren't, isn't</span>.
      </p>
      <p>
        La forma interogativă se va adăuga verbul auxiliar la începutul
        propoziției astfel devenind:{" "}
        <span>Am/Is/Are + Subiect + Verb-ing.</span>
      </p>
      <p>
        Adverbe de urmărit: <span>now, at the the moment, right now.</span>
      </p>
      <br />
      <h3>Folosire</h3>
      <p>1. Acțiune ce se întâmplă în momentul actual, acum:</p>
      <p>
        <span>I am cleaning my room now.</span> - Îmi curăț camera acum.
      </p>
      <p>
        2. Acţiuni de lungă durată ce se află în desfăşurare sau în progres:
      </p>
      <p>
        <span>I am studying to get my degree.</span> - Studiez ca să îmi iau
        diploma.
      </p>
      <p>3. Intenția unei acțiuni viitoare:</p>
      <p>
        <span>He is meeting with his familly after school.</span> - El se va
        întâlni cu familia după școală.
      </p>
      <p>4. Acțiuni iritante și dese:</p>
      <p>
        <span>You are always coming to class late.</span> - Mereu întârzii la
        oră.
      </p>
      <p>5. Exprimarea unei excepții:</p>
      <p>
        <span>
          I usually don't eat sweets, but today I am making an exception.
        </span>{" "}
        - Deobicei nu mănânc dulciuri dar astăzi fac o excepție.
      </p>
      <BackButton to="prezent-simplu" />
      <NextButton to="past-simple" />
    </div>
  );
};

export default PrezentContinuu;
