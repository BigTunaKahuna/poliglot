import React from "react";
import styles from "./Introducere.module.css";
import pas1 from "../../../../assets/pas1.png";
import pas2 from "../../../../assets/pas2.png";
import pas3 from "../../../../assets/pas3.png";
import NextButton from "../../NextButton/NextButton";

const Introducere = () => {
  return (
    <div className={styles.Introducere}>
      <h2>Introducere</h2>
      <p>
        Pentru a putea folosi următoarele lecții la cea mai bună eficiență vă
        rog să instalați extensia de browser apăsând pe următorul link ce vă va
        deschide o nouă fereastră pe Chrome Webstore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb"
        >
          Google Translate
        </a>
      </p>
      <p>
        1. După ce ați intrat pe link apăsați următorul buton "Add to Chrome"
        cum arată în poză:{" "}
      </p>
      <img src={pas1} alt="Pas 1 pentru instalarea extensiei." />
      <p>
        2. După pasul 1 va apărea astfel, unde va trebui să faceți click pe "Add
        extension" precum în poză:{" "}
      </p>
      <img src={pas2} alt="Pas 2 pentru instalarea extensiei." />
      <p>
        3. La finalul instalării extensia va apărea in dreapta sus a
        browser-ului dumneavoastră precum in poză:{" "}
      </p>
      <img src={pas3} alt="Pas 3 pentru instalarea extensiei." />

      <NextButton to="plural" />
    </div>
  );
};

export default Introducere;
