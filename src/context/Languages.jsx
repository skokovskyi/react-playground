import React from "react";

import { LANGUAGES } from "./constants";
import { LanguageContext } from "./context";

function renderLanguagesWithContext(context) {
  return (
    <div>
      <span>Select a language: </span>
      <select>
        {LANGUAGES.map(({key, value}) => {
          const attributes = {};

          if (key === context.selectedKey) {
            attributes["selected"] = "selected"
          }

          return (
            <option value={key} {...attributes}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default () => (
  <LanguageContext.Consumer>
    {renderLanguagesWithContext}
  </LanguageContext.Consumer>
);
