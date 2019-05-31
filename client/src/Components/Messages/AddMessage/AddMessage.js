import React, { useState } from "react";
import styles from "./AddMessage.module.css";
import axios from "axios";

const AddMessage = () => {
  const [messageBody, setMessageBody] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [valid, setValid] = useState(true);

  let handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    const valid = () => setValid(false);
    const invalid = () => setValid(true);

    switch (name) {
      case "continut":
        setMessageBody(value);
        if (!value || messageTitle < 1) {
          console.log("invalid");
          return invalid();
        }
        return valid();
      case "titlu":
        setMessageTitle(value);
        if (!value || messageBody < 1) {
          console.log("invalid");
          return invalid();
        }
        return valid();

      default:
        break;
    }
  };

  const adaugaMesaj = () => {
    axios
      .post(
        "http://localhost:5000/api/message/add/" + document.cookie.slice(3),
        {
          title: messageTitle,
          message: messageBody
        },
        { withCredentials: true }
      )
      .then(x => setMessageBody(""), setMessageTitle(""))
      .catch(x => console.log(x));
  };
  return (
    <div>
      <div className={styles.Articol}>
        <label htmlFor="titlu">Titlu: </label>
        <input
          name="titlu"
          id="titlu"
          type="text"
          value={messageTitle}
          onChange={handleChange}
        />
        <label htmlFor="continut">Conținut: </label>
        <textarea
          id="continut"
          name="continut"
          className={styles.AdaugaText}
          cols="50"
          rows="20"
          value={messageBody}
          onChange={handleChange}
        />
        <button disabled={valid} type="submit" onClick={adaugaMesaj}>
          Adaugă
        </button>
      </div>
    </div>
  );
};

export default AddMessage;
