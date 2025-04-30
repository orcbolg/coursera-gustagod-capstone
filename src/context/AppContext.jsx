import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [reservationData, setReservationData] = useState(null); // Para a reserva atual
  const [reservations, setReservations] = useState([]); // Inicializa com um array vazio

  // Função para armazenar a reserva atual
  const setReservation = (data) => {
    setReservationData(data);
    setReservations((prevReservations) => [...prevReservations, data]); // Adiciona à lista de reservas
  };

  return (
    <AppContext.Provider value={{ reservationData, reservations, setReservation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
