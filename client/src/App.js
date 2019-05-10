import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/Register";
import Profile from "./Containers/Profile/Profile";
import Limba from "./Containers/Limba/Limba";
import ProgramaEngleza from "./Components/Programa/Engleza/Engleza";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/limba" component={Limba} />
        <Route exact path="/limba/engleza" component={ProgramaEngleza} />
      </Switch>
    );

    return <React.Fragment>{routes}</React.Fragment>;
  }
}

export default App;
