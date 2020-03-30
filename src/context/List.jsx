import React from "react";
import PropTypes from "prop-types";

import withSelectedLanguageKey from "./withSelectedLanguageKey";

function List(props) {
  const { selectedLanguageKey } = props;
  const items = new Array(5).fill(null);

  return  (
    <div>
      List of to do items:
      <ul>
        {items.map((_, idx) => <li key={idx}>[{ selectedLanguageKey }] Item {idx}</li>)}
      </ul>
    </div>
  );
}

List.defaultProps = {
  selectedLanguageKey: "",
};

List.propTypes = {
  selectedLanguageKey: PropTypes.string,
};

export default withSelectedLanguageKey(List);
