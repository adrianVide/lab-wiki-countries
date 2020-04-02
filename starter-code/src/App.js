import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";
import { Detail } from "./components/Detail";

function App() {
  return (<div>
    <h1 className="Topbar" style={{ textAlign: "center" }}>Countries</h1>

    <div className="App row">
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        {" "}
        <CountryDetail />
      </div>

      {/* <div className="col-7"> */}
        <Switch>
          <Route exact path="/:id" component={Detail} />
        </Switch>
      {/* </div> */}
    </div>
    <footer className='Footer'>

    </footer>
    </div>
  );
}

export default App;
