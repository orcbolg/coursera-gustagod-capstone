import React from 'react';
import { useAppContext } from '../context/AppContext';

const ConfirmedBooking = () => {
  const { reservations } = useAppContext();

  return (
    <div>
      <h1>Reserva Confirmada</h1>
      <p>Sua reserva foi realizada com sucesso!</p>

      <h2>Reservas:</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            <strong>Data:</strong> {reservation.date} |
            <strong> Horário:</strong> {reservation.time} |
            <strong> Pessoas:</strong> {reservation.guests} |
            <strong> Ocasião:</strong> {reservation.occasion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfirmedBooking;
