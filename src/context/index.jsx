import React from "react";

import Languages from "./Languages";
import List from "./List";
import { LANGUAGES } from "./constants";
import { LanguageContext } from "./context";

import "./index.css";

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: {
        selectedKey: LANGUAGES[0].key,  //  TODO: This statement appears twice. I don't like it.
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
