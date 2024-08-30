import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import "./App.css";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecastData, setWeatherForecastData] = useState(null);
  const [city, setCity] = useState("delhi");
  const [searchCity, setSearchCity] = useState("delhi");
  // const apiKey = import.meta.env.KEY;
  const apiKey = "6a11f36ebadae1361af755eb4217b90f";
  // console.log(import.meta.env.KEY);
  useEffect(() => {
    const fetchWeatherData2 = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=${apiKey}&units=metric`
        );

        setWeatherForecastData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeatherData();
    fetchWeatherData2();
  }, [apiKey, city]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchCity);
    setCity(searchCity);
  };

  return (
    <>
      {weatherData ? (
        weatherForecastData && (
          <div className="app">
            <Header weatherData={weatherData} />
            <div className="mainBox">
              <div className="left">
                <h2>The Only Weather App You Need !</h2>

                <SearchBox
                  handleSearch={handleSearch}
                  setSearchCity={setSearchCity}
                />
              </div>
              <div className="right">
                <WeatherDetails weatherData={weatherData} />
              </div>
            </div>
            <Forecast weatherForecastData={weatherForecastData} />
            <div
              className="footer"
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "1.5rem",
                padding: "8px",
                borderTop: "1px solid #ccc",
              }}
            >
              All Copyright reserved by kalam
            </div>
          </div>
        )
      ) : (
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
          }}
        >
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}

export default App;
