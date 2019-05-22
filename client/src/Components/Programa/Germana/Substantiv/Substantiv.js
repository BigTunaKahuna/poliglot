import React from "react";
import ArtHot from "../../../../assets/articol hot.png";
import ArtNeHot from "../../../../assets/articol nehot.png";
import ArtDem from "../../../../assets/art dem.png";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const Substantiv = () => {
  return (
    <div>
      <h2>Substantiv</h2>
      <p>
        În limba germnă toate substantivele au gen și este de preferat a se
        memora și articolul cu care vine + formarea pluralului. Mai mult de
        atât, toate substantivele se scriu cu prima literă majusculă.
      </p>
      <p>
        1. Persoanele de gen masculin, anotimpuri, luni, zile, sau animale sunt
        toate de gen masculin și se termină în{" "}
        <span> -ant, -ast, -ich, -ig, -ismus, -ling, -or, -us. </span>
      </p>
      <p>
        2. Persoanele de gen feminin,animalele și numerele sunt toate de tip
        feminin, precum și substantivele care se termină în{" "}
        <span>
          a, -anz, -ei, -enz, -heit, -ie, -ik, -in, -keit, -schaft, -sion, -sis,
          -tät, -tion, -ung, -ur
        </span>
        .
      </p>
      <p>
        3. Personale tinere, animalele, metale, elemente chimice, litere,
        hoteluri, restaurante, cinema, continente, țări și provincii sunt toate
        de tip neutru, precum și substantivele care se termină în{" "}
        <span>-al, -an, -ar, -ät, -ent, -ett, -ier, -iv, -o, -on</span> dar și
        cele cu prefixele <span>ge-, -nis, -sal</span> sunt de tip neutru.
      </p>
      <br />
      <p>Tabel pentru articolul hotărât pentru toate cazurile</p>
      <p style={{ textAlign: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={ArtHot}
          alt="articolul hotărât"
        />
      </p>
      <br />

      <p>Tabel pentru articolul nehotărât pentru toate cazurile</p>
      <p style={{ textAlign: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={ArtNeHot}
          alt="articolul nehotărât"
        />
      </p>
      <br />

      <p>Tabel pentru articolul demonstrativ pentru toate cazurile</p>
      <p style={{ textAlign: "center" }}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={ArtDem}
          alt="articolul demonstrativ"
        />
      </p>
      <br />
      <BackButton to="directii" />
      <NextButton to="vocabular" />
    </div>
  );
};

export default Substantiv;
