import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "636cd915e8d437d8f2854fbbaff3ac2d";

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();
      console.log(data);

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      {weather && (
        <div>
          <h2>Temperature: {weather.main.temp}°C</h2>
          <h2>Humidity: {weather.main.humidity}%</h2>
          <h2>Wind Speed: {weather.wind.speed} m/s</h2>
        </div>
      )}
    </>
  );
};

export default WeatherApp;
