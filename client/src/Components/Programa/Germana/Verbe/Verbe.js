import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Verbe = () => {
  return (
    <div>
      <h2>Verbe</h2>
      <p>
        În germană toate verbule trebuie conjugate în funcție de persoană.
        Majoritate verbelor respectă aceeași conjugare înafară de verbele
        modale, verbele neregulate și cele care se termină cu{" "}
        <span>s, ß, x</span>
      </p>
      <p>Exemplu de conjugare verb simplu:</p>
      <p>
        <span>
          ich lern<b>e</b>
        </span>{" "}
        - eu învaț
      </p>
      <p>
        <span>
          du lern<b>st</b>
        </span>{" "}
        - tu învaț
      </p>
      <p>
        <span>
          er/sie/es lern<b>t</b>
        </span>{" "}
        - el/ea învață
      </p>
      <p>
        <span>
          wir lern<b>en</b>
        </span>{" "}
        - noi învățăm
      </p>
      <p>
        <span>
          ihr lern<b>t</b>
        </span>{" "}
        - voi învățați
      </p>
      <p>
        <span>
          sie/Sie lern<b>en</b>
        </span>{" "}
        - ei/dumneavoastră învață/învățați
      </p>
      <br />
      <h3>Conjugarea verbelor de bază</h3>
      <p>
        A avea - <span>habe</span>
      </p>
      <p>
        ich <span>habe</span> - eu am
      </p>
      <p>
        du <span>hast</span> - tu ai
      </p>
      <p>
        er/sie/es <span>hat</span> - el/ea au
      </p>
      <p>
        wir <span>haben</span> - noi avem
      </p>
      <p>
        ihr <span>habt</span> - voi aveți
      </p>
      <p>
        sie/Sie <span>haben</span> - ei/dumneavoastră au/aveți
      </p>
      <br />
      <p>
        A fi - <span>sein</span>
      </p>
      <p>
        ich <span>bin</span> - eu sunt
      </p>
      <p>
        du <span>bist</span> - tu ești
      </p>
      <p>
        er/sie/es <span>ist</span> - el/ea este
      </p>
      <p>
        wir <span>sind</span> - noi suntem
      </p>
      <p>
        ihr <span>seid</span> - voi sunteți
      </p>
      <p>
        sie/Sie <span>sind</span> - ei/dumneavoastră sunt/sunteți
      </p>
      <br />

      <p>
        A face - <span>machen</span>
      </p>
      <p>
        ich <span>mache</span> - eu fac
      </p>
      <p>
        du <span>machst</span> - tu faci
      </p>
      <p>
        er/sie/es <span>macht</span> - el/ea face
      </p>
      <p>
        wir <span>machen</span> - noi facem
      </p>
      <p>
        ihr <span>macht</span> - voi faceți
      </p>
      <p>
        sie/Sie <span>machen</span> - ei/dumneavoastră fac/faceți
      </p>
      <BackButton to="plural" />
      <NextButton to="zile" />
    </div>
  );
};

export default Verbe;
