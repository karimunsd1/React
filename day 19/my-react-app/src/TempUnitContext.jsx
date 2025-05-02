import { createContext, useContext, useState } from 'react';

const TempUnitContext = createContext();

export const useTempUnit = () => useContext(TempUnitContext);               //reuse way to access your context value and short cut
 
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
