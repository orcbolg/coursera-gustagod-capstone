import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState(null);
  const [reservations, setReservations] = useState([]);

  const setReservation = (data) => {
    setReservationData(data);
    setReservations((prevReservations) => [...prevReservations, data]);
  }

  return (
    <AppContext.Provider value={{ reservationData, reservations, setReservation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
