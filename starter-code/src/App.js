import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";
import { Detail } from "./components/Detail";

function App() {
  return (
    <div className="App">
      <CountryDetail />
      <Switch>
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
