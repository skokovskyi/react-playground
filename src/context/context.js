import React from "react";

import { LANGUAGES } from "./constants";

export const LanguageContext = React.createContext({
  selectedKey: LANGUAGES[0].key,
});
