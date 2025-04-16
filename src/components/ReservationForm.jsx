// src/components/ReservationForm.jsx
import React, { useState } from 'react';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Nome é obrigatório!';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email é obrigatório!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email inválido!';
      isValid = false;
    }

    if (!formData.date) {
      formErrors.date = 'Data é obrigatória!';
      isValid = false;
    }

    if (!formData.time) {
      formErrors.time = 'Hora é obrigatória!';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Reserva feita com sucesso!');
      // Aqui você pode enviar o formulário (por exemplo, via API)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="date">Data:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div>
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
        {errors.time && <p className="error">{errors.time}</p>}
      </div>

      <button type="submit">Reservar</button>
    </form>
  );
}

export default ReservationForm;
