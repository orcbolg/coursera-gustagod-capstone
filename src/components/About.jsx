import React from 'react';
import './About.css'


function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Little Lemon</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Restaurante familiar especializado em culinária mediterrânea
            tradicional com um toque moderno.
          </p>
        </div>
        <div className="about-image">
          <img src="/lemonview.jpeg" alt="Restaurante" />
        </div>
      </div>
    </div>
  );
}

export default About;

