import React from "react";

import Languages from "./Languages";
import List from "./List";

import "./index.css";

export default () => (
  <div className="context-demo">
    <h3>Context API demo</h3>
    <hr />
    <Languages />
    <br/>
    <List />
  </div>
);
