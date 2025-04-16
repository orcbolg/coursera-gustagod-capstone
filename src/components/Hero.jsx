import React from 'react';
import { Link } from 'react-router-dom'; 
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
    <h1 className="hero-title">Little Lemon</h1>

    <div className="hero-content">
        <div className="hero-text">
        <p>
            Restaurante familiar especializado em culinária mediterrânea tradicional com um toque moderno.
        </p>
        </div>

        <div className="hero-image">
        <img src="/plate.jpg" alt="Restaurante" />
        </div>
    </div>

    <Link to="/reservar" className="hero-button">Book a table</Link>
    </div>

  );
}

export default Hero;

