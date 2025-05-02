import React, { useState, useEffect } from "react";
import { WeatherProvider, useWeatherUnit } from "./WeatherContext";
import WeatherCard from "./WeatherCard";
import { mockWeather } from "./mockWeather";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const { toggleUnit, unit } = useWeatherUnit();

  const fetchWeather = (cityName) => {
    // Simulate fetch using mock data
    setWeatherData({
      ...mockWeather,
      location: { name: cityName },
    });
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSubmit = () => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Weather App</h1>

      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          Get Weather
        </button>
      </div>

      <button
        onClick={toggleUnit}
        className="bg-blue-600 text-white px-6 py-2 rounded-full mb-4 hover:bg-blue-500 transition"
      >
        Switch to {unit === "celsius" ? "Fahrenheit" : "Celsius"}
      </button>

      <WeatherCard data={weatherData} />
    </div>
  );
};

const App = () => (
  <WeatherProvider>
    <WeatherApp />
  </WeatherProvider>
);

export default App;
