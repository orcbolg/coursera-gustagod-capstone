import { Link } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm'

function ReservationPage() {
  return (
    <div>
      <h1>Bem-vindo ao Little Lemon!</h1>
      <Link to="/">Voltar a Home</Link>
      <ReservationForm></ReservationForm>
    </div>
  );
}

export default ReservationPage;
