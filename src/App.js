import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import SettlersOfCatan from "./Pages/Games/SettlersOfCatan";
import CitiesAndKnights from "./Pages/Games/CitiesAndKnights";
import Seafarers from "./Pages/Games/Seafarers";
import PuertoRico from "./Pages/Games/PuertoRico";

import { OutterContainerDiv } from "../src/Pages/Home/Home.styles";

function App() {
  return (
    <OutterContainerDiv>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            exact
            path="/catan"
            render={() => <SettlersOfCatan></SettlersOfCatan>}
          ></Route>
          <Route
            exact
            path="/citiesandknights"
            render={() => <CitiesAndKnights></CitiesAndKnights>}
          ></Route>
          <Route
            exact
            path="/seafarers"
            render={() => <Seafarers></Seafarers>}
          ></Route>
          <Route
            exact
            path="/puertorico"
            render={() => <PuertoRico></PuertoRico>}
          ></Route>
        </Switch>
      </Router>{" "}
    </OutterContainerDiv>
  );
}

export default App;
