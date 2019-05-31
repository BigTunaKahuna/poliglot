import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./AllMessages.module.css";

const AllMessages = () => {
  const [messages, setMessages] = useState(null);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/message/get/" + document.cookie.slice(3),
        {
          withCredentials: true
        }
      )
      .then(x => setMessages(x.data.message))
      .catch(x => console.log(x));
  }, [messages]);

  if (messages) {
    const deleteMessage = id => {
      axios
        .delete(
          "http://localhost:5000/api/message/delete/" +
            document.cookie.slice(3) +
            "/" +
            id,
          { withCredentials: true }
        )
        .then(x => console.log(x))
        .catch(x => console.log(x));
    };

    var messageList = messages.map(x => (
      <li key={x._id}>
        <h3>{x.title}</h3>
        <p>{x.body}</p>
        <button
          onClick={() => {
            deleteMessage(x._id);
          }}
          style={{ marginRight: "5vw" }}
        >
          Șterge
        </button>
        <button
          onClick={() => {
            pushMessage(x._id, x.title, x.body);
          }}
          style={{ marginLeft: "5vw" }}
        >
          <a href="#form">Modifică</a>
        </button>
      </li>
    ));
  }

  let pushMessage = (id, title, body) => {
    setId(id);
    setTitle(title);
    setBody(body);
    setDisplay("");
  };

  const editMessage = () => {
    axios
      .put(
        "http://localhost:5000/api/message/edit/" +
          document.cookie.slice(3) +
          "/" +
          id,
        { title: title, message: body },
        { withCredentials: true }
      )
      .then(x => setDisplay("none"))
      .catch(x => console.log(x));
  };

  const onBodyChange = e => {
    setBody(e.target.value);
  };

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.Message}>
      <div className={styles.EditMessage}>
        <form
          id="form"
          onSubmit={e => e.preventDefault()}
          style={{ display: display }}
        >
          <label htmlFor="title" name="title">
            Titlu:
          </label>
          <input id="title" value={title} onChange={onTitleChange} />
          <br />
          <label htmlFor="compunere" name="compunere">
            Compunere:
          </label>
          <br />
          <textarea
            id="compunere"
            cols="80"
            rows="20"
            value={body}
            onChange={onBodyChange}
          />
          <br />
          <button
            onClick={() => {
              editMessage();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={styles.MessageList}>
        <ul>{messageList}</ul>
      </div>
    </div>
  );
};

export default AllMessages;
