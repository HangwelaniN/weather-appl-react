import React, { useState } from "react";
import "./Weather.css";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="weatherunits">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit} className="units">
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="weatherunits">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
