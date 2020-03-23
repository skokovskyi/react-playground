import React from "react";

import Languages from "./Languages";
import List from "./List";

import { LanguageContext } from "./context";

import "./index.css";
import {LANGUAGES} from "./constants";

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: {
        selectedKey: LANGUAGES[0].key,
      },
    };
  }

  render() {
    return (
      <div className="context-demo">
        <LanguageContext.Provider value={this.state.language}>
          <h3>Context API demo</h3>
          <hr />
          <Languages />
          <br/>
          <List />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default ContextDemo;
