import React from "react";
import { useWeatherUnit } from "./WeatherContext";

const WeatherCard = ({ data }) => {
  const { unit } = useWeatherUnit();

  if (!data) return null;

  const { location, current } = data;
  const temp = unit === "celsius" ? current.temp_c : current.temp_f;

  return (
    <div className="bg-cyan-100 rounded-2xl shadow-md p-6 w-full max-w-sm mx-auto mt-6 text-center">
      <h2 className="text-2xl font-semibold">{location.name}</h2>
      <p className="text-xl mt-2">{temp}°{unit === "celsius" ? "C" : "F"}</p>
      <p className="text-gray-700 mt-1">{current.condition.text}</p>
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="mx-auto mt-2"
      />
    </div>
  );
};

export default WeatherCard;
