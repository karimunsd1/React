import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeatherUnit = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [unit, setUnit] = useState("celsius");

  const toggleUnit = () =>
    setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));

  return (
    <WeatherContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};
