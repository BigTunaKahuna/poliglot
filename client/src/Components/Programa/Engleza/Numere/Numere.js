import React from "react";
import styles from "./Numere.module.css";
import NextButton from "../../NextButton/NextButton";
import BackButton from "../../BackButton/BackButton";

const Numere = () => {
  return (
    <div className={styles.Container}>
      <h2>Numere</h2>
      <p>
        Vă voi prezenta numerele în limba engleză. Nu uitați să folosiți
        extensia instalată în introducere pentru a putea învăța și pronunția!
      </p>
      <br />
      <p>Următoarele sunt numerele de la 1 la 10 care vor fi de bază: </p>
      <p>
        0 - <span>zero</span>
      </p>
      <p>
        1 - <span>one</span>
      </p>
      <p>
        2 - <span>two</span>
      </p>
      <p>
        3 - <span>three</span>
      </p>
      <p>
        4 - <span>four</span>
      </p>
      <p>
        5 - <span>five</span>
      </p>
      <p>
        6 - <span>six</span>
      </p>
      <p>
        7 - <span>seven</span>
      </p>
      <p>
        8 - <span>eight</span>
      </p>
      <p>
        9 - <span>nine</span>
      </p>
      <p>
        10 - <span>ten</span>
      </p>
      <br />
      <p>
        Numerele în engleză până la 20 sunt puțin mai dificile însă după, va
        interveni o regulă generală pentru formarea numerelor. Continuăm până la
        20:{" "}
      </p>
      <p>
        11 - <span>eleven</span>
      </p>
      <p>
        12 - <span>twelve</span>
      </p>
      <p>
        13 - <span>thirteen</span>
      </p>
      <p>
        14 - <span>fourteen</span>
      </p>
      <p>
        15 - <span>fifteen</span>
      </p>
      <p>
        16 - <span>sixteen</span>
      </p>
      <p>
        17 - <span>seventeen</span>
      </p>
      <p>
        18 - <span>eighteen</span>
      </p>
      <p>
        19 - <span>nineteen</span>
      </p>
      <p>
        20 - <span>twenty</span>
      </p>
      <br />
      <p>Vom continua cu numerele până la 90 inclusiv, din 10 în 10:</p>
      <p>
        30 - <span>thirty</span>
      </p>
      <p>
        40 - <span>forty</span>
      </p>
      <p>
        50 - <span>fifty</span>
      </p>
      <p>
        60 - <span>sixty</span>
      </p>
      <p>
        70 - <span>seventy</span>
      </p>
      <p>
        80 - <span>eighty</span>
      </p>
      <p>
        90 - <span>ninety</span>
      </p>
      <br />
      <p>
        Pentru a înțelege regula vom scrie numerele de la 21 până la 29
        inclusiv:
      </p>
      <p>
        21 - <span>twenty</span>+<span>one</span> (twentyone)
      </p>
      <p>
        22 - <span>twenty</span>+<span>two</span> (twentytwo)
      </p>
      <p>
        23 - <span>twenty</span>+<span>three</span> (twentythree)
      </p>
      <p>
        24 - <span>twenty</span>+<span>four</span> (twentyfour)
      </p>
      <p>
        25 - <span>twenty</span>+<span>five</span> (twentyfive)
      </p>
      <p>
        26 - <span>twenty</span>+<span>six</span> (twentysix)
      </p>
      <p>
        27 - <span>twenty</span>+<span>seven</span> (twentyseven)
      </p>
      <p>
        28 - <span>twenty</span>+<span>eight</span> (twentyeight)
      </p>
      <p>
        29 - <span>twenty</span>+<span>nine</span> (twentynine)
      </p>
      <p>
        Putem observa că de la 20 în sus numerele se formează prin alipirea
        zecilor cu unităților. Această regulă se respectă până la 100 exclusiv
        unde va interveni 100 însuși.
      </p>
      <br />
      <p>Scrierea în engleză a 100, 1000, 1000000:</p>
      <p>
        100 - <span>one</span>+<span>hundred</span> (one hundred)
      </p>
      <p>
        1000 - <span>one</span>+<span>thousand</span> (one thousand)
      </p>
      <p>
        1000000 - <span>one</span>+<span>million</span> (one million)
      </p>
      <p>
        Pentru a scrie de exemplu 300 se va schimba prefixul <span>one</span>{" "}
        (1) cu <span>three</span> (3) formând <span>three hundred</span>
      </p>
      <p>
        Pentru a scrie 123 vom avea: <span>one hundred twentythree</span>
      </p>
      <p>
        Pentru a scrie 579824 vom avea:{" "}
        <span>five hundred seventynine thousand eight hundred twentyfour</span>.
        Putem observa că scrierea numărului este la fel ca în română respectând
        aceeași regulă de scris.
      </p>
      <BackButton to="/limba/engleza/verbe-de-baza" />
      <NextButton to="/limba/engleza/pronume" />
    </div>
  );
};

export default Numere;
