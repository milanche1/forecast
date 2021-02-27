import React, { Fragment } from "react";
import Loading from "./Loading";

const Weather = (props) => {
  const { name, main, weather } = props.data;
  const { loading } = props.loading;

  const kToCelsius = (k) => {
    return Math.round(k - 273.15);
  };

  const returnIcon = (icon) => {
    let atr;
    switch (icon) {
      case "Clear":
        atr = "fa fa-circle";
        break;
      default:
        atr = "fa fa-question";
        break;
    }

    return atr;
  };
  return loading ? (
    <Loading />
  ) : (
    <Fragment>
      <div>
        <h2>
          {name} {kToCelsius(main.temp)} &#8451;
        </h2>
        <h3>{weather}</h3>
      </div>
    </Fragment>
  );
};

export default Weather;
