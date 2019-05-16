import React from "react";
import styles from "./Pronume.module.css";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Pronume = () => {
  //TODO: Tabel cu unordered list si list item
  return (
    <div className={styles.Pronume}>
      <h2>Pronume</h2>
      <p>1. Pronume personal subiectiv:</p>
      <div className={styles.ContainerPers}>
        <div className={styles.Cell1}>Eu</div>
        <div className={styles.Cell2}>Tu</div>
        <div className={styles.Cell3}>El</div>
        <div className={styles.Cell4}>Ea</div>
        <div className={styles.Cell5}>Impersonal</div>
        <div className={styles.Cell6}>Noi</div>
        <div className={styles.Cell7}>Voi</div>
        <div className={styles.Cell8}>Ei,ele</div>
        <div className={styles.Cell9}>I</div>
        <div className={styles.Cell10}>You</div>
        <div className={styles.Cell11}>He</div>
        <div className={styles.Cell12}>She</div>
        <div className={styles.Cell13}>It</div>
        <div className={styles.Cell14}>We</div>
        <div className={styles.Cell15}>You</div>
        <div className={styles.Cell16}>They</div>
      </div>
      <br />
      <p>Exemplu:</p>
      <div className={styles.Exemplu}>
        <div className={styles.ExempluEng}>
          <p>ENG:</p>
          <p>
            <span>I</span> am going to the shop.
          </p>
          <p>
            <span>You</span> are going to the shop.
          </p>
          <p>
            <span>He/She/It</span> is going to the shop.
          </p>
          <p>
            <span>We</span> are going to the shop.
          </p>
          <p>
            <span>You</span> are going to the shop.
          </p>
          <p>
            <span>They</span> are going to the shop.
          </p>
        </div>
        <div className={styles.ExemplurRo}>
          <p>RO:</p>
          <p>
            <span>Eu</span> merg la magazin.
          </p>
          <p>
            <span>Tu</span> mergi la magazin.
          </p>
          <p>
            <span>El/Ea/El</span> merge la magazin.
          </p>
          <p>
            <span>Noi</span> mergem la magazin.
          </p>
          <p>
            <span>Voi</span> mergeți la magazin.
          </p>
          <p>
            <span>Ei/Ele</span> merg la magazin.
          </p>
        </div>
      </div>
      <hr />
      <br />
      <p>2. Pronume personal obiectiv</p>
      <div className={styles.ContainerOb}>
        <div className={styles.Cell1}>-mi mine</div>
        <div className={styles.Cell2}>-ti tine</div>
        <div className={styles.Cell3}>-i el</div>
        <div className={styles.Cell4}>-i ea</div>
        <div className={styles.Cell5}>-ne noi</div>
        <div className={styles.Cell6}>-va voi</div>
        <div className={styles.Cell7}>-le ei,ele</div>
        <div className={styles.Cell8}>Me</div>
        <div className={styles.Cell9}>You</div>
        <div className={styles.Cell10}>Him</div>
        <div className={styles.Cell11}>Her</div>
        <div className={styles.Cell12}>Us</div>
        <div className={styles.Cell13}>You</div>
        <div className={styles.Cell14}>Them</div>
      </div>
      <br />
      <p>Exemplu:</p>
      <div className={styles.Exemplu}>
        <div className={styles.ExempluEng}>
          <p>ENG:</p>
          <p>
            Jane went with <span>me</span> to the school.
          </p>
          <p>
            Jane went with <span>you</span> to the school.
          </p>
          <p>
            Jane went with <span>him</span> to the school.
          </p>
          <p>
            Jane went with <span>her</span> to the school.
          </p>
          <p>
            Jane went with <span>us</span> to the school.
          </p>
          <p>
            Jane went with <span>you</span> to the school.
          </p>
          <p>
            Jane went with <span>them</span> to the school.
          </p>
        </div>
        <div className={styles.ExempluRo}>
          <p>RO:</p>
          <p>
            Jane a mers cu <span>mine</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>tine</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>el</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>ea</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>noi</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>voi</span> la școală.
          </p>
          <p>
            Jane a mers cu <span>ei/ele</span> la școală.
          </p>
        </div>
      </div>
      <hr />
      <br />

      <p>3. Pronume posesiv:</p>
      <div className={styles.ContainerPos}>
        <div className={styles.Cell1}>Mine</div>
        <div className={styles.Cell2}>Yours</div>
        <div className={styles.Cell3}>His</div>
        <div className={styles.Cell4}>Hers</div>
        <div className={styles.Cell5}>Ours</div>
        <div className={styles.Cell6}>Yours</div>
        <div className={styles.Cell7}>Theirs</div>
        <div className={styles.Cell8}>
          <ul>
            <li>Al meu</li>
            <li>A mea</li>
            <li>Ai mei</li>
            <li>Ale </li>
            <li>mele</li>
          </ul>
        </div>
        <div className={styles.Cell9}>
          <ul>
            <li>Al tau</li>
            <li>A ta</li>
            <li>Ai tai</li>
            <li>Ale </li>
            <li>tale</li>
          </ul>
        </div>
        <div className={styles.Cell10}>
          <ul>
            <li>Al lui</li>
            <li>A lui</li>
            <li>Ai lui</li>
            <li>Ale </li>
            <li>lui</li>
          </ul>
        </div>
        <div className={styles.Cell11}>
          <ul>
            <li>Al ei</li>
            <li>A ei</li>
            <li>Ai ei</li>
            <li>Ale </li>
            <li>ei</li>
          </ul>
        </div>
        <div className={styles.Cell12}>
          <ul>
            <li>Al nostru</li>
            <li>A noastră</li>
            <li>Ai noștri</li>
            <li>Ale </li>
            <li>noastre</li>
          </ul>
        </div>
        <div className={styles.Cell13}>
          <ul>
            <li>Al vostru</li>
            <li>A voastră</li>
            <li>Ai voștri</li>
            <li>Ale </li>
            <li>voastre</li>
          </ul>
        </div>
        <div className={styles.Cell14}>
          <ul>
            <li>Al lor</li>
            <li>A lor</li>
            <li>Ai lor</li>
            <li>Ale </li>
            <li>lor</li>
          </ul>
        </div>
      </div>
      <br />
      <p>Exemplu:</p>
      <div className={styles.Exemplu}>
        <div className={styles.ExempluEng}>
          <p>ENG:</p>
          <p>
            The book is <span>mine</span>.
          </p>
          <p>
            The book is <span>yours</span>.
          </p>
          <p>
            The book is <span>his</span>.
          </p>
          <p>
            The book is <span>hers</span>.
          </p>
          <p>
            The book is <span>ours</span>.
          </p>
          <p>
            The book is <span>yours</span>.
          </p>
          <p>
            The book is <span>theirs</span>.
          </p>
        </div>
        <div className={styles.ExempluRo}>
          <p>RO:</p>
          <p>
            Cartea este a <span>mea</span>.
          </p>
          <p>
            Cartea este a <span>ta</span>.
          </p>
          <p>
            Cartea este a <span>lui</span>.
          </p>
          <p>
            Cartea este a <span>ei</span>.
          </p>
          <p>
            Cartea este a <span>noastră</span>.
          </p>
          <p>
            Cartea este a <span>voastră</span>.
          </p>
          <p>
            Cartea este a <span>lor</span>.
          </p>
        </div>
      </div>
      <hr />
      <br />

      <p>4. Pronume demonstrativ:</p>
      <div className={styles.ContainerDem}>
        <div className={styles.Cell1}>This</div>
        <div className={styles.Cell2}>That</div>
        <div className={styles.Cell3}>These</div>
        <div className={styles.Cell4}>Those</div>
        <div className={styles.Cell5}>
          <ul>
            <li>Acesta</li>
            <li>Aceasta</li>
          </ul>
        </div>
        <div className={styles.Cell6}>
          <ul>
            <li>Acela</li>
            <li>Aceea</li>
          </ul>
        </div>
        <div className={styles.Cell7}>
          <ul>
            <li>Aceștia</li>
            <li>Acestea</li>
          </ul>
        </div>
        <div className={styles.Cell8}>
          <ul>
            <li>Aceia</li>
            <li>Acelea</li>
          </ul>
        </div>
      </div>
      <br />
      <p>Exemplu:</p>
      <div className={styles.Exemplu}>
        <div className={styles.ExempluEng}>
          <p>ENG:</p>
          <p>
            <span>This</span> is my cat.
          </p>
          <p>
            <span>That</span> is my cat.
          </p>
          <p>
            <span>These</span> are my cats.
          </p>
          <p>
            <span>Those</span> are my cats.
          </p>
        </div>
        <div className={styles.ExempluRo}>
          <p>RO:</p>
          <p>
            <span>Aceasta</span> este pisica mea.
          </p>
          <p>
            <span>Aceea</span> este pisica mea.
          </p>
          <p>
            <span>Acestea</span> sunt pisicile mea.
          </p>
          <p>
            <span>Acelea</span> sunt pisicile mea.
          </p>
        </div>
      </div>
      <hr />
      <br />

      <p>5. Pronume indefinit:</p>
      <div className={styles.ContainerInd}>
        <div className={styles.Cell1}>Anybody</div>
        <div className={styles.Cell2}>Everybody</div>
        <div className={styles.Cell3}>Somebody</div>
        <div className={styles.Cell4}>Oricine</div>
        <div className={styles.Cell5}>Toată lumea</div>
        <div className={styles.Cell6}>Cineva</div>
      </div>
      <br />
      <div className={styles.Exemplu}>
        <div className={styles.ExempluEng}>
          <p>ENG:</p>
          <p>
            Is <span>anybody</span> home?
          </p>
          <p>
            <span>Everybody</span> is home.
          </p>
          <p>
            <span>Somebody</span> is home.
          </p>
        </div>
        <div className={styles.ExempluRo}>
          <p>RO:</p>
          <p>
            Este <span>cineva</span> acasă?
          </p>
          <p>
            <span>Toată lumea</span> este acasă.
          </p>
          <p>
            <span>Cineva</span> este acasă.
          </p>
        </div>
      </div>
      <br />
      <BackButton to="/limba/engleza/numere" />
      <NextButton to="/limba/engleza/intrebari" />
    </div>
  );
};

export default Pronume;
