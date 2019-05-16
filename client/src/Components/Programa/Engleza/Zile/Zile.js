import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Zile = () => {
  return (
    <div>
      <h2>Zilele săptămânii</h2>
      <p>
        În această lecție vom discuta despre zilele săptămânii în engleză. Să
        începem:
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p>Eng:</p>
          <p>
            <span>Monday</span>
          </p>
          <p>
            <span>Tuesday</span>
          </p>
          <p>
            <span>Wednesday</span>
          </p>
          <p>
            <span>Thursday</span>
          </p>
          <p>
            <span>Friday</span>
          </p>
          <p>
            <span>Saturday</span>
          </p>
          <p>
            <span>Sunday</span>
          </p>
        </div>
        <div>
          <p>Ro:</p>
          <p>Luni</p>
          <p>Marți</p>
          <p>Miercuri</p>
          <p>Joi</p>
          <p>Vineri</p>
          <p>Sâmbătă</p>
          <p>Duminică</p>
        </div>
      </div>
      <br />
      <p>Exemplu:</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p>Eng:</p>
          <p>
            <span>Monday</span> is the first day of the week.
          </p>
          <p>
            <span>Tuesday</span> I will go play footbal.
          </p>
          <p>
            <span>Wednesday</span> is my lazy day.
          </p>
          <p>
            <span>Thursday</span> I am going to the cinema.
          </p>
          <p>
            <span>Friday</span> I will relax at home.
          </p>
          <p>
            <span>Saturday</span> I will stay with my parents.
          </p>
          <p>
            <span>Sunday</span> I am going to church.
          </p>
        </div>
        <div>
          <p>Ro:</p>
          <p>
            <span>Luni</span> este prima zi a săptămânii.
          </p>
          <p>
            <span>Marți</span> merg să joc fotbal.
          </p>
          <p>
            <span>Miercuri</span> este ziua mea leneșă.
          </p>
          <p>
            <span>Joi</span> merg la cinema.
          </p>
          <p>
            <span>Vineri</span> mă relaxez acasă.
          </p>
          <p>
            <span>Sâmbătă</span> voi stau cu părinții mei.
          </p>
          <p>
            <span>Duminică</span> merg la biserică.
          </p>
        </div>
      </div>
      <BackButton to="/limba/engleza/intrebari" />
      <NextButton to="/limba/engleza/luni" />
    </div>
  );
};

export default Zile;
