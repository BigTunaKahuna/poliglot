import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
    return <React.Fragment>{routes}</React.Fragment>;
  }
}

export default App;
