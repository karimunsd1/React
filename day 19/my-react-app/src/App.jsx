import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react';
import WeatherDisplay from './WeatherDisplay';
import TemperatureToggle from './TemperatureToggle';
import { TempUnitProvider } from './TempUnitContext';

const fetchWeather = async (city) => {
  const geocodeRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);   
  const geocodeData = await geocodeRes.json();
  
  const { latitude, longitude } = geocodeData.results[0];

  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);    
  const weatherData = await weatherRes.json();

  return {
    city,
    temp: weatherData.current_weather.temperature,
    condition: weatherData.current_weather.weathercode,
  };
};

function App() {
  const [city, setCity] = useState('guntur');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  const handleCityChange = (e) => {
    e.preventDefault();
    const inputCity = e.target.elements.city.value.trim();
    if (inputCity) {
      setCity(inputCity);
    }
  };

  return (
    <TempUnitProvider>
      <div className="bg-gray-100 max-w-md  py-6 ">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Weather App</h1>

        <form onSubmit={handleCityChange} class="flex items-center justify-center gap-4">
          <input
            name="city"
            placeholder="Enter city"
            class="border border-gray-300 rounded-lg px-4 py-2 w-64"
          />
          <button
            type="submit"
            class="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Get Weather
          </button>
        </form>

        <TemperatureToggle />
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>         
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>             
        ) : (
          weather && <WeatherDisplay weather={weather} />               
        )}

      </div>
    </TempUnitProvider>
  );
}

export default App;
