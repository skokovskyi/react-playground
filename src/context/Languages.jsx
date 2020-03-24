import React from "react";

import { LANGUAGES } from "./constants";
import { LanguageContext } from "./context";

function Languages(props) {
  const { selectedLanguageKey, onChange } = props;

  return (
    <div>
      <span>Select a language: </span>
      <select onChange={(e) => onChange(e.target.value)}>
        {LANGUAGES.map(({key, value}) => {
          const attributes = {};

          if (key === selectedLanguageKey) {
            attributes["selected"] = undefined;
          }

          return (
            <option key={value} value={key} {...attributes}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default (props) => (
  <LanguageContext.Consumer>
    {
      (v) => <Languages {...props} selectedLanguageKey={v.selectedKey} />
    }
  </LanguageContext.Consumer>
);
