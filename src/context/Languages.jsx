import React from "react";
import PropTypes from "prop-types";

import withSelectedLanguageKey from "./withSelectedLanguageKey";
import { LANGUAGES } from "./constants";

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

Languages.defaultProps = {
  selectedLanguageKey: "",
  onChange: () => {},
};

Languages.propTypes = {
  selectedLanguageKey: PropTypes.string,
  onChange: PropTypes.func,
};

export default withSelectedLanguageKey(Languages);
