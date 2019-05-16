import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Tari = () => {
  const tariEng = (capitala, tara) => {
    return (
      <p>
        <span>{capitala}</span> is the capital of <span>{tara}</span>.
      </p>
    );
  };

  const tariRo = (capitala, tara) => {
    return (
      <p>
        <span>{capitala}</span> este capitala <span>{tara}</span>.
      </p>
    );
  };

  const cetateniLimbaEng = (tara, limba) => {
    return (
      <p>
        I am <span>{tara}</span> and I speak <span>{limba}</span>.
      </p>
    );
  };

  const cetateniLimbaRo = (tara, limba) => {
    return (
      <p>
        Sunt <span>{tara}</span> și vorbesc <span>{limba}</span>.
      </p>
    );
  };

  return (
    <div>
      <h2>Țări/Capitale/Limbi/Cetățeni</h2>
      <p>
        În această lecție vom învăța despre numele țărilor, capitalelor,
        limbilor și cetățenilor.
      </p>
      <br />

      <h3>1. Țări și capitale</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Eng:</p>
          {tariEng("Bucharest", "Romania")}
          {tariEng("Athens", "Greece")}
          {tariEng("Sofia", "Bulgaria")}
          {tariEng("Ankara", "Turkey")}
          {tariEng("London", "England")}
          {tariEng("Paris", "France")}
          {tariEng("Rome", "Italy")}
          {tariEng("Lisbon", "Portugal")}
          {tariEng("Madrid", "Spain")}
          {tariEng("Berlin", "Germany")}
          {tariEng("Budapest", "Hungary")}
          {tariEng("Warsaw", "Poland")}
          {tariEng("Prague", "Czech Republic")}
          {tariEng("Moscow", "Russia")}
        </div>
        <div>
          <p>Ro:</p>
          {tariRo("București", "României")}
          {tariRo("Atena", "Greciei")}
          {tariRo("Sofia", "Bulgariei")}
          {tariRo("Ankara", "Turciei")}
          {tariRo("Londdra", "Angliei")}
          {tariRo("Paris", "Franței")}
          {tariRo("Roma", "Italiei")}
          {tariRo("Lisabona", "Portugaliei")}
          {tariRo("Madrid", "Spaniei")}
          {tariRo("Berlin", "Germaniei")}
          {tariRo("Budapesta", "Ungariei")}
          {tariRo("Varșovia", "Poloniei")}
          {tariRo("Praga", "Republicii Ceha")}
          {tariRo("Moscova", "Rusiei")}
        </div>
      </div>
      <br />
      <h3>2. Limbă și cetățeni</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Eng:</p>
          {cetateniLimbaEng("Romanian", "Romanian")}
          {cetateniLimbaEng("Greek", "Greece")}
          {cetateniLimbaEng("Bulgarian", "Bulgarian")}
          {cetateniLimbaEng("Turkish", "Turk")}
          {cetateniLimbaEng("English", "English")}
          {cetateniLimbaEng("French", "France")}
          {cetateniLimbaEng("Italian", "Italy")}
          {cetateniLimbaEng("Portuguese", "Portugal")}
          {cetateniLimbaEng("Spaniard", "Spanish")}
          {cetateniLimbaEng("German", "German")}
          {cetateniLimbaEng("Hungarian", "Hungarian")}
          {cetateniLimbaEng("Pole", "Polish")}
          {cetateniLimbaEng("Czech", "Czech")}
          {cetateniLimbaEng("Russian", "Russian")}
        </div>
        <div>
          <p>Ro:</p>
          {cetateniLimbaRo("român", "română")}
          {cetateniLimbaRo("grec", "greacă")}
          {cetateniLimbaRo("bulgar", "bulgară")}
          {cetateniLimbaRo("turc", "turcă")}
          {cetateniLimbaRo("englez", "engleză")}
          {cetateniLimbaRo("francez", "franceză")}
          {cetateniLimbaRo("italian", "italiană")}
          {cetateniLimbaRo("portughez", "portugheză")}
          {cetateniLimbaRo("spaniol", "spaniolă")}
          {cetateniLimbaRo("german", "germană")}
          {cetateniLimbaRo("ungur", "ungară")}
          {cetateniLimbaRo("polonez", "poloneză")}
          {cetateniLimbaRo("ceh", "cehă")}
          {cetateniLimbaRo("rus", "rusă")}
        </div>
      </div>
      <BackButton to="/limba/engleza/luni" />
      <NextButton to="/limba/engleza/prezent-simplu" />
    </div>
  );
};

export default Tari;
