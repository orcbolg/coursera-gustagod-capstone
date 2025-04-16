import React from 'react';
import './Header.css'
import '../styles/global.css'
import { Link } from 'react-router-dom'; // Importando o Link do React Router para navegar pelas páginas

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/favicon.ico" alt="Little Lemon" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link className='navitem' to="/">Home</Link></li>
          <li><Link className='navitem' to="/reservar">Reservar</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
