// import logo from './logo.svg';
import "./App.css";
import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Default from "./views/Default";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/search" component={Search} /> */}
        <Route path="/" component={Default} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
