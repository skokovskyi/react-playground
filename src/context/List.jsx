import React from "react";

import { LanguageContext } from "./context";

function renderListWithLanguageContext(languageContext) {
  const key = languageContext.selectedKey;
  const items = new Array(5).fill(null);

  return  (
    <div>
      List of to do items:
      <ul>
        {items.map((_, idx) => <li key={idx}>[{ key }] Item {idx}</li>)}
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
