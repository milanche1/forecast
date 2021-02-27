import React, { Fragment, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState();
  const [searchHistory, setSearchHistory] = useState([]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      props.searchCity(text);
      const newState = [...searchHistory, text];
      setSearchHistory(newState);
    } else {
      return <Fragment>Enter Something!</Fragment>;
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" id="search" onChange={onChange} />
        <input type="submit" value="submit" />
      </form>
      <h4>Recent</h4>
      <ul>
        {searchHistory.map((entry) => {
          return <li>{entry}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
