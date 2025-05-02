import { createContext, useContext, useState } from 'react';

const TempUnitContext = createContext();

export const useTempUnit = () => useContext(TempUnitContext);             
 
export const TempUnitProvider = ({ children }) => {
  const [unit, setUnit] = useState('Celsius');

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <TempUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TempUnitContext.Provider>
  );
};
