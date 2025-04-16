import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Little Lemon. Todos os direitos reservados.</p>
        <nav>
          <ul>
            <li><a href="/about">Sobre nós</a></li>
            <li><a href="/contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
