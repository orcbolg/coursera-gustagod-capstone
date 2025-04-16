// components/Testimonials.jsx
import React from 'react';

function Testimonial({ name, text, image }) {
  return (
    <div className="testimonial">
      <img src={image} alt={name} />
      <p>"{text}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

function Testimonials() {
  const testimonialsData = [
    { name: 'João', text: 'A comida é maravilhosa!', image: '/assets/joao.jpg' },
    { name: 'Maria', text: 'Melhor restaurante da cidade!', image: '/assets/maria.jpg' },
  ];

  return (
    <section className="testimonials">
      <h2>O que nossos clientes dizem</h2>
      <div className="testimonial-list">
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
