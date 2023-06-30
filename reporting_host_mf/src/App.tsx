import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Reporting from "./components/Reporting";

const App = () => (
  <div className="container">
    <Reporting />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
