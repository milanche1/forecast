import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Loading = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="loading.."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Loading;
