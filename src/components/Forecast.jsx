import React from "react";

function Forecast({ weatherForecastData }) {
  const forecastData = weatherForecastData.list;
  // const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  return (
    <div className="forecast">
      <h3>
        More On {weatherForecastData.city.name},{" "}
        {weatherForecastData.city.country}
      </h3>
      <div className="forecast-cards">
        {forecastData.map((data, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-temp">{parseInt(data.main.temp)}°C</div>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt=""
            />
            <div className="forecast-desc">{data.weather[0].description}</div>
            <div className="forecast-time">
              {data.dt_txt.split(" ")[1].split(":")[0] === "12" ||
              data.dt_txt.split(" ")[1].split(":")[0] === "00"
                ? 1
                : parseInt(data.dt_txt.split(" ")[1].split(":")[0]) % 12}
              {data.dt_txt.split(" ")[1].split(":")[0] >= 12
                ? ":00 PM"
                : ":00 AM"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
