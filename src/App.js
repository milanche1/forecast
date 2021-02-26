import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Search from "./components/Search";

const App = () => {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    exampleApiCall();
  }, []);

  const exampleApiCall = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=ad2ac65c430e299c3ed4fabe674063e1`
    );
    setMockData(res.data);
    console.log("my state!!!!!!!!!!! ", mockData);
    setLoading(false);
  };

  const searchCity = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=ad2ac65c430e299c3ed4fabe674063e1`
    );
    setMockData(res.data);
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="App-container">
        <h1>Weather Forecast</h1>
        <Search searchCity={searchCity} />
        <Weather loading={loading} data={mockData} />
      </div>
    </div>
  );
};

export default App;
