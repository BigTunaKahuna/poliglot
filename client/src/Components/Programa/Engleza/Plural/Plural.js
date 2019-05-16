import React from "react";
import styles from "./Plural.module.css";

import NextButton from "../../NextButton/NextButton";
import BackButton from "../../BackButton/BackButton";

const Plural = () => {
  return (
    <div className={styles.Plural}>
      <h2>Plural</h2>
      <p>
        În engleză forma de plural a substantivelor,în general, se formează prin
        adăugarea terminației "s" la final.
      </p>
      <p>Exemple:</p>

      <p>
        RO: măr-mere | ENG: apple-apple<span>s</span>
      </p>
      <p>
        RO: doctor-doctori | ENG: doctor-doctor<span>s</span>
      </p>
      <p>
        RO: copac-copaci | ENG: tree-tree<span>s</span>
      </p>
      <br />
      <p>Exemple de substantive care fac excepție de la regula "s":</p>
      <p>
        RO: talpă-tălpi | ENG: foot-f<span>ee</span>t
      </p>
      <p>
        RO: oaie-oi | ENG: sheep-sh<span>ee</span>p
      </p>
      <p>
        RO: gâsca-gâște | ENG: goose-g<span>ee</span>se
      </p>
      <p>
        RO: copil-copii | ENG: child-child<span>ren</span>
      </p>
      <p>
        RO: bărbat-bărbați | ENG: man-m<span>e</span>n
      </p>
      <br />
      <p>
        Sunt mult mai multe substantive fără formă regulată dar veți descoperi
        cu timpul și mai multe!
      </p>
      <BackButton to="introducere" />
      <NextButton to="verbe-de-baza" />
    </div>
  );
};

export default Plural;
