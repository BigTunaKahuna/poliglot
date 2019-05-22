import React from "react";
import RoEng from "../../RoEng";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Anotimp = () => {
  return (
    <div>
      <h2>Anotimp</h2>
      <RoEng ro="Primăvară" eng="der Frühling" />
      <RoEng ro="Vară" eng="der Sommer" />
      <RoEng ro="Toamnă" eng="der Herbst" />
      <RoEng ro="Iarnă" eng="der Winter" />
      <BackButton to="luni" />
      <NextButton to="directii" />
    </div>
  );
};

export default Anotimp;
