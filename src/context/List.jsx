import React from "react";

import { LanguageContext } from "./context";

function renderListWithLanguageContext(value) {
  const selectedLanguageKey = value.selectedKey;

  return  (
    <div>
      List of to do items:
      <ul>
        <li>[{selectedLanguageKey}] Item 1</li>
        <li>[{selectedLanguageKey}] Item 2</li>
        <li>[{selectedLanguageKey}] Item 3</li>
      </ul>
    </div>
  );
}

//  TODO: implement this as HOC and List with selectedLanguageKey prop.
export default () => {
  return (
    <LanguageContext.Consumer>
      {renderListWithLanguageContext}
    </LanguageContext.Consumer>
  );
};
