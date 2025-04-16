import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Componente raiz
import './styles/global.css'; // Aqui entra o CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
