import React from "react";

const WeatherInfoIcons = {
  sunset: "/resource/temp.svg",
  sunrise: "/resource/temp.svg",
  humidity: "/resource/humidity.svg",
  wind: "/resource/wind.svg",
  pressure: "/resource/pressure.svg",
};

const WeatherIcons = {
  "01d": "/resource/sunny.svg",
  "01n": "/resource/night.svg",
  "02d": "/resource/day.svg",
  "02n": "/resource/cloudy-night.svg",
  "03d": "/resource/cloudy.svg",
  "03n": "/resource/cloudy.svg",
  "04d": "/resource/perfect-day.svg",
  "04n": "/resource/cloudy-night.svg",
  "09d": "/resource/rain.svg",
  "09n": "/resource/rain-night.svg",
  "10d": "/resource/rain.svg",
  "10n": "/resource/rain-night.svg",
  "11d": "/resource/storm.svg",
  "11n": "/resource/storm.svg",
};

const WeatherInfoComoponent = (props) => {
  const { name, value } = props;

  return (
    <div className="InfoContainer">
      <img src={WeatherInfoIcons[name]} className="InfoIcon" />
      <span className="InfoLabel">
        {value} <span>{name}</span>
      </span>
    </div>
  );
};

const WeatherReport = ({ weather }) => {
  const isDay = weather.weather[0].icon.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <div className="WeatherCondition">
        <div className="condition">
          <span>{`${Math.floor(weather.main.temp - 273)}°C`}</span>
          {`| ${weather.weather[0].description}`}
        </div>
        <img
          src={WeatherIcons[weather.weather[0].icon]}
          className="WeatherLogo"
        />
      </div>
      <span className="Location">{`${weather.name}, ${weather.sys.country}`}</span>
      <span className="WeatherInfoLabel">Weather Info</span>
      <div className="WeatherInfoContainer">
        <WeatherInfoComoponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComoponent name="humidity" value={weather.main.humidity}/>
        <WeatherInfoComoponent name="wind" value={weather.wind.speed} />
        <WeatherInfoComoponent name="pressure" value={weather.main.pressure} />
      </div>
    </>
  );
};

export default WeatherReport;
