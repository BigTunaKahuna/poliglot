import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const TrecutSimplu = () => {
  return (
    <div>
      <h2>
        Trecut Simplu (<span>Past Simple</span>)
      </h2>
      <p>
        Trecutul simplu este folosit pentru a exprima o acțiune petrecută în
        trecut și care nu mai are legatură cu prezentul, timp folosit pentru
        narațiuni și acțiuni repetitive din trecut.
      </p>
      <h3>Formare</h3>
      <p>
        Pentru verbe regulate: <span>Subiect + Verb-ed.</span>
      </p>
      <p>
        Pentru verbe neregulate: <span>Subiect + Verb(II formă).</span>
      </p>
      <p>
        Pentru o listă completă cu verbe neregulate verificați următorul link:{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ro.wikipedia.org/wiki/Verbe_neregulate_%C3%AEn_limba_englez%C4%83"
        >
          verbe neregulate
        </a>
      </p>
      <br />
      <p>Exemplu verb regulat:</p>
      <p>
        <span>I worked hard today.</span> - Am muncit din greu astăzi.
      </p>
      <p>
        <span>You worked hard today.</span> - Ai muncit din greu astăzi.
      </p>
      <p>
        <span>He/She/It worked hard today.</span> - El/Ea/Ea a muncit din greu
        astăzi.
      </p>
      <p>
        <span>We worked hard today.</span> - Noi am muncit din greu astăzi.
      </p>
      <p>
        <span>You worked hard today.</span> - Voi ați muncit din greu astăzi.
      </p>
      <p>
        <span>They worked hard today.</span> - Ei au muncit din greu astăzi.
      </p>
      <br />
      <p>Exemplu verb neregulat:</p>
      <p>
        <span>I ate home.</span> - Am mâncat acasă.
      </p>
      <p>
        <span>You ate home.</span> - Ai mâncat acasă.
      </p>
      <p>
        <span>He/She/It ate home.</span> - El/Ea/Ea a mâncat acasă.
      </p>
      <p>
        <span>We ate home.</span> - Noi am mâncat acasă.
      </p>
      <p>
        <span>You ate home.</span> - Voi ați mâncat acasă.
      </p>
      <p>
        <span>They ate home.</span> - Ei au mâncat acasă.
      </p>
      <br />

      <p>
        Pentru forma interogativă: <span>Did + Subiect + Verb(forma I)</span>
      </p>
      <p>
        Pentru forma negativă:{" "}
        <span>Subiect + did not(didn't) + Verb(forma I)</span>
      </p>
      <BackButton to="prezent-continuu" />
      <NextButton to="trecut-continuu" />
    </div>
  );
};

export default TrecutSimplu;
