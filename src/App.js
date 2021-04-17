import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Currencies, Favourites } from "./containers";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Switch>
          <Route path="/" component={Currencies} exact />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;
