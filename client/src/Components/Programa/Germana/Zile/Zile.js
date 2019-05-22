import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Zile = () => {
  return (
    <div>
      <h2>Zile</h2>
      <p>
        Luni - <span>Montag</span>
      </p>
      <p>
        Marți - <span>Dienstag</span>
      </p>
      <p>
        Miercuri - <span>Mittwoch</span>
      </p>
      <p>
        Joi - <span>Donnerstag</span>
      </p>
      <p>
        Vineri - <span>Freitag</span>
      </p>
      <p>
        Sâmbătă - <span>Samstag</span>
      </p>
      <p>
        Duminică - <span>Sonntag</span>
      </p>
      <BackButton to="verbe" />
      <NextButton to="luni" />
    </div>
  );
};

export default Zile;
