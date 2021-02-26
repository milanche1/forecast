import React from "react";

const Weather = (props) => {
  const { name, main } = props.data;
  const kToCelsius = (k) => {
    return Math.round(k - 273.15);
  };
  return (
    <div>
      <h2>
        {name} {kToCelsius(main.temp)} &#8451;
      </h2>
    </div>
  );
};

export default Weather;
