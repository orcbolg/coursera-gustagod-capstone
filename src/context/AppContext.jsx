import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState(null);

  const setReservation = (data) => {
    setReservationData(data);
  };

  return (
    <AppContext.Provider value={{ reservationData, setReservation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
