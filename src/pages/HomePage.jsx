import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bem-vindo ao Little Lemon!</h1>
      <Link to="/reservar">Faça sua Reserva</Link>
    </div>
  );
}

export default HomePage;
