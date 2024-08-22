import React from "react";
import ToggleSwitch from "./ToggleSwitch.jsx";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function Header({ weatherData }) {
  return (
    <header className="header">
      <h1>Weather App</h1>
      <div className="toggle-and-location">
        <ToggleSwitch />
        <div className="location">
          <LocationOnOutlinedIcon /> {weatherData.name},{" "}
          {weatherData.sys.country}
        </div>
      </div>
    </header>
  );
}

export default Header;
