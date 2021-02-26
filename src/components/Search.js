import React, { Fragment, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      props.searchCity(text);
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
    </div>
  );
};

export default Search;
