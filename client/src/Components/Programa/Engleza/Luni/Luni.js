import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Luni = () => {
  return (
    <div>
      <h2>Lunile anului</h2>
      <p>
        În engleză lunile anului precum și zilele săptămânii cuvântul începe cu
        majusculă.
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Eng:</p>
          <p>
            <span>January</span>
          </p>
          <p>
            <span>February</span>
          </p>
          <p>
            <span>March</span>
          </p>
          <p>
            <span>April</span>
          </p>
          <p>
            <span>May</span>
          </p>
          <p>
            <span>June</span>
          </p>
          <p>
            <span>July</span>
          </p>
          <p>
            <span>August</span>
          </p>
          <p>
            <span>September</span>
          </p>
          <p>
            <span>October</span>
          </p>
          <p>
            <span>November</span>
          </p>
          <p>
            <span>December</span>
          </p>
        </div>
        <div>
          <p>Ro:</p>
          <p>Ianuarie</p>
          <p>Februarie</p>
          <p>Martie</p>
          <p>Aprilie</p>
          <p>Mai</p>
          <p>Iunie</p>
          <p>Iulie</p>
          <p>August</p>
          <p>Septembrie</p>
          <p>Octombrie</p>
          <p>Noiembrie</p>
          <p>Decembrie</p>
        </div>
      </div>
      <BackButton to="/limba/engleza/zile" />
      <NextButton to="/limba/engleza/tari-capitale-limbi-cetateni" />
    </div>
  );
};

export default Luni;
