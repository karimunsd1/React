import { useTempUnit } from './TempUnitContext';

const WeatherDisplay = ({ weather }) => {
  const { unit } = useTempUnit();

  const convertTemp = (tempCelsius) => unit === 'Celsius' ? tempCelsius : (tempCelsius * 9 / 5 + 32).toFixed(1);           // convert frm celsius to  Fahrenheit frmula
  const getWeatherDescription = (code) => {
    switch (code) {
      case 0: return "Clear sky";
      case 1: return "Mainly clear";
      case 2: return "Partly cloudy";
      case 3: return "Overcast";
      case 45: return "Fog";
      case 95: return "Thunderstorm";
      case 96: return "Thunderstorm with slight hail";
      case 99: return "Thunderstorm with heavy hail";
      default: return "Unknown weather";
    }
  };

  return (
    <div className="mt-8 max-w-xs mx-auto bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg rounded-xl p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{weather.city}</h2>
      <p className="text-xl text-gray-700 mb-1">
        {convertTemp(weather.temp)}°{unit}
      </p>
      <p className="text-gray-700">{getWeatherDescription(weather.condition)}</p>
      <img
        src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        className="mx-auto bg-white p-4 rounded-full shadow-inner"
        alt="Weather Icon"
      />
    </div>


  );
};


export default WeatherDisplay;
