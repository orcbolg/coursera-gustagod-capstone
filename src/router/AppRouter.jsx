import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReservationPage from '../pages/ReservationPage';
import ConfirmedBooking from '../components/ConfirmedBooking';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservar" element={<ReservationPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default AppRouter;