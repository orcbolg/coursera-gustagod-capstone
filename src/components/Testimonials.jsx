import React from 'react';
import './Testimonials.css'


function Testimonial({ name, text, image }) {
  return (
    <div className="highlight-card">
      <img src={image} alt={name} />
      <div className="highlight-info">
      <p className='highlight-description'>"{text}"</p>
      <h4>- {name}</h4>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonialsData = [
    { name: 'João', text: 'A comida é maravilhosa!', image: '/joao.jpg' },
    { name: 'Maria', text: 'Melhor restaurante da cidade!', image: '/maria.jpg' },
  ];

  return (
    <section className="highlights">
      <h2>O que nossos clientes dizem</h2>
      <div className="highlight-list">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
