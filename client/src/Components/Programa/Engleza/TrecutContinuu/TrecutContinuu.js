import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const TrecutContinuu = () => {
  return (
    <div>
      <h2>
        Trecut Continuu (<span>Past Continuous</span>)
      </h2>
      <p>
        Trecutul continuu este folosit pentru a exprima o acțiune sau o stare în
        trecut, o acțiune sau o stare desfășurată în mod continuu într-un
        interval bine definit din trecut.
      </p>
      <h3>Formare</h3>
      <p>
        Forma afirmativă:{" "}
        <span>Subiect + was/were + Verb (participiu prezent)</span>
      </p>
      <p>
        <span>I was running.</span>
      </p>
      <p>
        <span>You were running.</span>
      </p>
      <p>
        <span>He/She/It was running.</span>
      </p>
      <p>
        <span>We were running.</span>
      </p>
      <p>
        <span>You were running.</span>
      </p>
      <p>
        <span>They were running.</span>
      </p>
      <br />
      <p>
        Forma interogativă:{" "}
        <span>Was/Were + Subiect + Verb (participiu prezent)?</span>
      </p>
      <p>
        <span>Was I running?</span>
      </p>
      <p>
        <span>Were you running?</span>
      </p>
      <p>
        <span>Was he/she/it running?</span>
      </p>
      <p>
        <span>Were we running?</span>
      </p>
      <p>
        <span>Were you running?</span>
      </p>
      <p>
        <span>Were they running?</span>
      </p>

      <br />
      <p>
        Forma negativă:{" "}
        <span>Subiect + was/were + not + Verb (participiu prezent)</span>
      </p>
      <p>
        <span>I was not running.</span>
      </p>
      <p>
        <span>You were not running.</span>
      </p>
      <p>
        <span>He/She/It was not running.</span>
      </p>
      <p>
        <span>We were not running.</span>
      </p>
      <p>
        <span>You were not running.</span>
      </p>
      <p>
        <span>They were not running.</span>
      </p>
      <BackButton to="trecut-simplu" />
      <NextButton to="prezent-perfect" />
    </div>
  );
};

export default TrecutContinuu;
