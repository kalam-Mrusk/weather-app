import React, { useState, useEffect } from "react";

function ToggleSwitch() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isNight ? "night" : "day");
  }, [isNight]);

  const handleToggle = () => {
    setIsNight(!isNight);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        checked={isNight}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span>🌙</span>
        <span>☀️</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
