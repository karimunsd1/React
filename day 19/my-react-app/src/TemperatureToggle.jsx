import { useTempUnit } from './TempUnitContext';

const TemperatureToggle = () => {
  const { unit, toggleUnit } = useTempUnit();

  return (
    <button
      onClick={toggleUnit}
      className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Switch to {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
    </button>

  );
};

export default TemperatureToggle;
