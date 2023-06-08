import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/pages/Home/Home";
import AboutContact from "../src/pages/AboutContact/AboutContact";
import Coding from "../src/pages/Coding/Coding";
import Creative from "../src/pages/Creative/Creative";
import "./App.scss";

export default function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Fragment>
            <Header />
            <Route path="/coding" component={Coding} />
            <Route path="/creative" component={Creative} />
            <Route path="/contact" component={AboutContact} />
          </Fragment>
        </Switch>
      </BrowserRouter>
    </main>
  );
}
