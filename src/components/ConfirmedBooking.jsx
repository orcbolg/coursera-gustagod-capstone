import React from 'react';
import { useAppContext } from '../context/AppContext';

const ConfirmedBooking = () => {
  const { reservations } = useAppContext();

  return (
    <div className="hero-container">
      <h1 className="hero-title">Reserva Confirmada!</h1>
      <p className="hero-text">Sua reserva foi realizada com sucesso!</p>
      <h2 className="hero-title">Reservas:</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li className="hero-text" key={index}>
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
