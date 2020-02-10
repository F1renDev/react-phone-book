import React from "react";

const SearchBox = props => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search monsters"
        onChange={event => props.searchChange(event)}
      />
    </div>
  );
};

export default SearchBox;
