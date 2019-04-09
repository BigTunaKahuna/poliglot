import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Containers/Home";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}

export default App;
