// import React from "react";
// // import "./WeatherDetails.css";

// const WeatherDetails = ({
//   apparentTemp,
//   humidity,
//   windSpeed,
//   uvIndex,
//   visibility,
//   pressure,
// }) => {
//   return (
//     <div className="weather-details">
//       <p>Weather Details</p>
//       {/* <ul>
//         <li>Apparent Temperature: {apparentTemp}°C</li>
//         <li>Humidity: {humidity}%</li>
//         <li>Wind Speed: {windSpeed} m/s</li>
//         <li>UV Index: {uvIndex}</li>
//         <li>Visibility: {visibility / 1000} km</li>
//         <li>Air Pressure: {pressure} hPa</li>
//       </ul> */}
//       <div className="weatherDetailsContainer">
//         <div className="wdi">
//           <h4>Feels like</h4>
//           <p>{apparentTemp}°C</p>
//         </div>
//         <div className="wdi">
//           <h4>Humidity</h4>
//           <p>{humidity}%</p>
//         </div>
//         <div className="wdi">
//           <h4>Wind Speed</h4>
//           <p>{windSpeed} m/s</p>
//         </div>
//         <div className="wdi">
//           <h4>UV Index</h4>
//           <p>{uvIndex}</p>
//         </div>
//         <div className="wdi">
//           <h4>Visibility</h4>
//           <p>{visibility / 1000} km</p>
//         </div>
//         <div className="wdi">
//           <h4>Air Pressure</h4>
//           <p>{pressure} hPa</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherDetails;

import React from "react";

function WeatherDetails({ weatherData }) {
  const { name, main, weather, wind, visibility } = weatherData;
  const { temp, pressure, humidity, feels_like, temp_max, temp_min } = main;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const unixTime = weatherData.dt + weatherData.timezone;

  const dateObj = new Date(unixTime * 1000);
  const utcString = dateObj.toUTCString().split(" ");
  return (
    <div className="weather-details">
      <h2>Today, {name}</h2>
      <div className="current-weather">
        <div className="temperature">
          {parseInt(temp)}°C
          <p style={{ fontSize: "18px" }}>
            {parseInt(temp_min)}°C/{parseInt(temp_max)}°C
          </p>
        </div>
        <div className="weather-desc">
          <img
            src={weatherIcon}
            alt="icon"
            style={{ width: "70px", height: "80px" }}
          />
          <p>{weather[0].main}</p>
          <p>{weather[0].description}</p>
          <p>
            {utcString[0] +
              " " +
              utcString[1] +
              " " +
              utcString[2] +
              " " +
              utcString[3]}
          </p>
        </div>
      </div>
      <div className="weather-info">
        <div className="wi">
          <p>Real Feel</p>
          <p>{parseInt(feels_like)}°C</p>
        </div>
        <div className="wi">
          <p>Humidity</p>
          <p> {humidity}%</p>
        </div>
        <div className="wi">
          <p>Cloud Cover</p>
          <p> {weatherData.clouds.all}%</p>
        </div>
        <div className="wi">
          <p>Air Pressure</p>
          <p> {parseInt(pressure)} hPa</p>
        </div>
        <div className="wi">
          <p>Visibility</p>
          <p> {parseInt(visibility) / 1000} km</p>
        </div>
        <div className="wi wind">
          <p>Wind</p>
          <p> {wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
