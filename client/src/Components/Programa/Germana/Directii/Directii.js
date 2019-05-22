import React from "react";
import NextButton from "../../NextButton/NextButton";
import BackButton from "../../BackButton/BackButton";
import RoEng from "../../RoEng";

const Directii = () => {
  return (
    <div>
      <h2>Direcții</h2>
      <RoEng ro="sus" eng="nach oben" />
      <RoEng ro="jos" eng="nach unten" />
      <RoEng ro="stânga" eng="link" />
      <RoEng ro="dreapta" eng="rechts" />
      <RoEng ro="desupra" eng="oben" />
      <RoEng ro="dedesubt" eng="unter" />
      <RoEng ro="între" eng="zwischen" />
      <RoEng ro="Nord" eng="der Norden" />
      <RoEng ro="Sud" eng="der Süden" />
      <RoEng ro="Est" eng="der Osten" />
      <RoEng ro="West" eng="der Westen" />
      <BackButton to="anotimp" />
      <NextButton to="substantiv" />
    </div>
  );
};

export default Directii;
