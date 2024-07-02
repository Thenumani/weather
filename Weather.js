import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [temperature, setTemperature] = useState(20);
  const [color, setColor] = useState("black");
  const [bgcolor, setBgcolor] = useState("lightgreen");

  const increment = () => {
    const newTemp = temperature + 5;
    setTemperature(newTemp);
    setColor("purple");
    setBgcolor(newTemp > 30 ? "lightblue" : "lightgreen");
  };

  const decrement = () => {
    const newTemp = temperature - 5;
    setTemperature(newTemp);
    setColor("orange");
    setBgcolor(newTemp > 30 ? "lightblue" : "lightgreen");
  };

  return (
    <div className="container">
      <div className="inner" style={{ backgroundColor: bgcolor }}>
        <p style={{ color: color }}>{temperature}°C</p>
        <p style={{ color: "green" }}>
          Weather: {temperature < 30 ? 'cool' : 'warm'}
        </p>
      </div>

      <div className="btn">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default Weather;
