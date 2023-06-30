import React from "react";
import ReactDOM from "react-dom";
import Reporting from "reporting_module/App";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: reporting_host_mf</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
