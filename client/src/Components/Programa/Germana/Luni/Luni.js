import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Luni = () => {
  return (
    <div>
      <h2>Lunile anului</h2>
      <p>
        Ianuarie - <span>Januar</span>
      </p>
      <p>
        Februarie - <span>Februar</span>
      </p>
      <p>
        Martie - <span>März</span>
      </p>
      <p>
        Aprilie - <span>April</span>
      </p>
      <p>
        Mai - <span>Mai</span>
      </p>
      <p>
        Iunie - <span>Juni</span>
      </p>
      <p>
        Iulie - <span>Juli</span>
      </p>
      <p>
        August - <span>August</span>
      </p>
      <p>
        Septembrie - <span>September </span>
      </p>
      <p>
        Octombrie - <span>Oktober</span>
      </p>
      <p>
        Noiembrie - <span>November</span>
      </p>
      <p>
        Decembrie - <span>Dezember</span>
      </p>
      <p>
        Lună - <span>der Monat (-e)</span>
      </p>
      <p>
        An - <span>das Jahr (-e)</span>
      </p>
      <p>
        lunar - <span>monatlich</span>
      </p>
      <p>
        anual - <span>järlich</span>
      </p>

      <BackButton to="zile" />
      <NextButton to="anotimp" />
    </div>
  );
};

export default Luni;
