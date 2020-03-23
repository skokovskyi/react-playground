import React from "react";

import { LANGUAGES } from "./constants";

export default () => {
  return (
    <div>
      <span>Select a language: </span>
      <select>
        {LANGUAGES.map(({ key, value}) => <option value={key}>{value}</option>)}
      </select>
    </div>
  );
};
