// components/Highlights.jsx
import React from 'react';
import './Highlights.css'

function Highlight({ title, description, image }) {
  return (
    <div className="highlight">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Highlights() {
  const highlightsData = [
    { title: 'Prato do Mês', description: 'Nosso prato de destaque é... ', image: '/plate.jpg' },
    { title: 'Promoção Especial', description: 'Desconto em reservas para grupos!', image: '/promo.png' },
  ];

  return (
    <section className="highlights">
      <h2>Destaques do Restaurante</h2>
      <div className="highlight-list">
        {highlightsData.map((highlight, index) => (
          <Highlight
            key={index}
            title={highlight.title}
            description={highlight.description}
            image={highlight.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Highlights;
