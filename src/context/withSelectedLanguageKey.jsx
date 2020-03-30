import React from "react";
import { LanguageContext } from "./context";

export default (Component) => {
  return (props) => {
    return (
      <LanguageContext.Consumer>
        {(value) => <Component selectedLanguageKey={value.selectedKey} {...props} />}
      </LanguageContext.Consumer>
    );
  };
}
