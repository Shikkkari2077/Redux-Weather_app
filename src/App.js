import "./App.css";
import { React, useState } from "react";
import axios from "axios";
import WeatherReport from "./WeatherReport";

import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./actions/WeatherAction";

const API_KEY = "e2acfdccc2701e0849d63bbca0f0efd0";

function App() {
  const [city, updateCity] = useState("");

  const weather = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    dispatch(setWeather(response.data));
  };

  console.log(weather);

  return (
    <div className="App">
      <div className="container">
        <span className="cityHeading">Weather Forcast Redux</span>
        {!Object.keys(weather).length == 0 ? (
          <WeatherReport weather={weather} />
        ) : (
          <div className="city_component">
            <img
              className="perfect_day"
              src="/resource/perfect-day.svg"
              alt=""
            />

            <span className="ChooseCityLabel">Find Weather of your City</span>

            <form action="" onSubmit={fetchWeather}>
              <input
                type="text"
                onChange={(e) => updateCity(e.target.value)}
                placeholder="Enter City"
              />
              <button>Search</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
