import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ReservationPage from '../pages/ReservationPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservar" element={<ReservationPage />} />
    </Routes>
  );
}

export default AppRouter;