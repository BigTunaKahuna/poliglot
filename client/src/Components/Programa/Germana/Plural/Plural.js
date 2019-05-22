import React from "react";
import PluralGermana from "../../../../assets/plural-germana.png";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Plural = () => {
  return (
    <div>
      <h2>Plural</h2>
      <p>
        Pentru formarea pluralului nu există o regulă generală, însă majoritatea
        substantivelor formează pluralul cu <span>-e, -en</span> pe când altele
        cu umlaut (<span>ä, ö, ü</span>). Toate substantivele au la plural
        articolul "
        <span>
          <b>die</b>
        </span>
        ".
      </p>
      <p style={{ textAlign: "center" }}>
        <img
          style={{ height: "auto", maxWidth: "100%" }}
          src={PluralGermana}
          alt="Tabel plural germană"
        />
      </p>
      <BackButton to="introducere" />
      <NextButton to="verbe" />
    </div>
  );
};

export default Plural;
