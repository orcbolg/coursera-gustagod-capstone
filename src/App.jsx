// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppRouter from './router/AppRouter';
import { Header, Footer } from './components';
import './styles/global.css';

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <AppRouter />
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;