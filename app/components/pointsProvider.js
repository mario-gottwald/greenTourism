import { createContext, useState } from 'react';

export const AppContext = createContext();

// Einlösbarer Punktestand
export const PointProvider = ({ children }) => {
  const [points, setPoints] = useState(3);

  return (
    <AppContext.Provider value={{ points, setPoints }}>
      {children}
    </AppContext.Provider>
  );
};