import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Reporting from "reporting_module/Reporting";
const App = () => (
  <div className="container">
    <div>Name: MainSite</div>
    <Reporting />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
