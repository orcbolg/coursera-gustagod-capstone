import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function ReservationPage() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(1);
  const { setReservation } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { name, people };
    setReservation(reservation);  // Armazena a reserva no contexto
  };

  return (
    <div>
      <h1>Reserve sua mesa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número de pessoas"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
}

export default ReservationPage;
