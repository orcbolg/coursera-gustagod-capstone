import { Link } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm'

function ReservationPage() {
  return (
    <div>
      <Link to="/">Voltar a Home</Link>
      <ReservationForm></ReservationForm>
    </div>
  );
}

export default ReservationPage;
