import React from "react";
import BackButton from "../../BackButton/BackButton";
import NextButton from "../../NextButton/NextButton";

const PrezentSimplu = () => {
  return (
    <div>
      <h2>
        Prezent simplu (<span>Present Simple</span>)
      </h2>
      <p>
        În următoarele lecții inclusiv aceasta vom începe sa ne ocupăm de
        timpurile în limba engleză. Aceste lecții sunt fundamentale. Ele ne
        ajută cosntant la o exprimare corectă din punct de vedere gramatical dar
        și pentru înțelegerea mesajului transmis.
      </p>
      <p>
        Prezentul simplu face referire la o acțiune sau eveniment care{" "}
        <span>se repetă</span>. Bineînțeles ca există și excepții precum
        referirea de multe ori la viitor precum "My plane leaves tomorrow."
        (Avionul meu pleacă mâine.) .
      </p>
      <br />
      <h3>Formare</h3>
      <p>
        Prezentul simplu se formează după următoarea formulă pentru afirmații:{" "}
        <span>Subiect + Verb</span> pentru toate persoanele înafară de a treia
        singular unde este <span>Subiect + Verb(s/es)</span>
      </p>
      <p>
        <b>Notă!</b> Când verbul se termină în "y", "y"-ul se transformă în "i"
        și se adaugă "es". Exemplu: <span>fly - flie</span>,{" "}
        <span>study - studies</span>
      </p>
      <p>
        Pentru interogări se utilizează următoarea formă:{" "}
        <span>Do + Subiect + Verb?</span> iar pentru persoana a treia singular{" "}
        <span>Does + he/she/it + Verb?</span>.
      </p>
      <p>Exemplu propoziții afirmative:</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p>Eng:</p>
          <p>
            <span>I go to school every day.</span>
          </p>
          <p>
            <span>You go to school every day.</span>
          </p>
          <p>
            <span>He/She/It goes to school every day.</span>
          </p>
          <p>
            <span>We go to school every day.</span>
          </p>
          <p>
            <span>You go to school every day.</span>
          </p>
          <p>
            <span>They go to school every day.</span>
          </p>
        </div>
        <div>
          <p>Ro:</p>
          <p>
            <span>Eu merg în fiecare zi la școală.</span>
          </p>
          <p>
            <span>Tu mergi în fiecare zi la școală.</span>
          </p>
          <p>
            <span>El/Ea/Imp. merge în fiecare zi la școală.</span>
          </p>
          <p>
            <span>Noi mergem în fiecare zi la școală.</span>
          </p>
          <p>
            <span>Voi mergeți în fiecare zi la școală.</span>
          </p>
          <p>
            <span>Ei merg în fiecare zi la școală.</span>
          </p>
        </div>
      </div>

      <p>Exemplu propoziții interogative:</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p>Eng:</p>
          <p>
            <span>Do I read everyday?</span>
          </p>
          <p>
            <span>Do you read everyday?</span>
          </p>
          <p>
            <span>Does he/she/it read everyday?</span>
          </p>
          <p>
            <span>Do we read everyday?</span>
          </p>
          <p>
            <span>Do you read everyday?</span>
          </p>
          <p>
            <span>Do they read everyday?</span>
          </p>
        </div>
        <br />
        <div>
          <p>Ro:</p>
          <p>
            <span>Citesc în fiecare zi?</span>
          </p>
          <p>
            <span>Citești în fiecare zi?</span>
          </p>
          <p>
            <span>Citește în fiecare zi?</span>
          </p>
          <p>
            <span>Citim în fiecare zi?</span>
          </p>
          <p>
            <span>Citiți în fiecare zi?</span>
          </p>
          <p>
            <span>Citesc în fiecare zi?</span>
          </p>
        </div>
      </div>
      <br />
      <p>Present Simple poate fi folosit pentru următoarele scenarii:</p>
      <p>
        1. Acțiuni generale care au loc într-un interval de timp nespecificat.
        Adevăruri general valabile:
      </p>
      <p>
        <span>Water boils at 100 degrees Celsius.</span> - Apa fierbe la 100 de
        grace Celsius.
      </p>
      <p>
        <span>Spiders are arachnids.</span> - Paianjenii sunt arahnide.
      </p>
      <br />
      <p>
        2. Acțiuni care se întâmplă în mode repetat (de urmărit cuvintele
        specifice):
      </p>
      <p>
        I go to gym <span>every day</span>. - Merg la sală în fiecare zi.
      </p>
      <p>
        The cinama <span>opens</span> at 10:00. - Cinema-ul deschide la 10.
      </p>
      <br />
      <p>3. Preferințe:</p>
      <p>
        I <span>like</span> chocolate. - Îmi place ciocolata.
      </p>
      <p>
        Some <span>believe</span> in different religions. - Unii cred în
        diferite religii.
      </p>
      <br />
      <p>4. Comentarii sportive, demonstrații, exclamații:</p>
      <p>
        Now <span>mix</span> the butter with the eggs. - Acuma amestecați untul
        cu ouăle.
      </p>
      <p>
        You always <span>come</span> late! - Mereu întârzii!
      </p>
      <br />
      <p>5. Exprimarea unei acțiuni planificate:</p>
      <p>
        They <span>arrive</span> tomorrow at eleven. - Ei ajung mâine la 11.
      </p>

      <BackButton to="limba/engleza/tari-capitale-limbi-cetateni" />
      <NextButton to="limba/engleza/prezent-continuu" />
    </div>
  );
};

export default PrezentSimplu;
