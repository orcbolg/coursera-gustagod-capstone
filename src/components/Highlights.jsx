import React from 'react';
import './Highlights.css'

function Highlight({ title, description, image }) {
  return (
    <div className="highlight-card">
      <img src={image} alt={title} />
      <div className="highlight-info">
        <div className='highlight-header'>
          <h3 className='highlight-title'>{title}</h3>
          <span className='highlight-price'>R$ 20,00</span>
        </div>
      <p className="highlight-description">{description}</p>
      </div>
    </div>
  );
}

function Highlights() {
  const highlightsData = [
    { title: 'Brusqueta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/plate.jpg' },
    { title: 'Torta de limão', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/promo.png' },
    { title: 'Torta de chocolate', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/promo.png' }
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
