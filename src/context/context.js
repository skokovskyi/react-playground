import React from "react";

import { getDefaultLanguage } from "./utils";

export const LanguageContext = React.createContext({
  selectedKey: getDefaultLanguage().key,
});
