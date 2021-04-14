import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Currencies from "./containers/Currencies";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Currencies />
        </Route>
        <Route path="/setupCurriences">{/* <Favourites /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
