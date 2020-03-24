import React from "react";

import Languages from "./Languages";
import List from "./List";

import { LanguageContext } from "./context";
import { getDefaultLanguage } from "./utils";

import "./index.css";

class ContextDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: {
        selectedKey: getDefaultLanguage().key,
      },
    };
  }

  handleLanguageChange = (selectedKey) => {
    this.setState({
      language: { selectedKey },
    });
  };

  render() {
    return (
      <div className="context-demo">
        <LanguageContext.Provider value={this.state.language}>
          <h3>Context API demo</h3>
          <hr />
          <Languages onChange={this.handleLanguageChange}/>
          <br/>
          <List />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default ContextDemo;
