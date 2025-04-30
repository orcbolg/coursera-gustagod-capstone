import './ReservationForm.css'
import { useAppContext } from '../context/AppContext';

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api'; // Importando as funções da API

const ReservationForm = ({ submitForm }) => {
  const { reservationData, setReservation } = useAppContext();
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    date: Yup.date().required('Escolha uma data válida'),
    time: Yup.string().required('Escolha um horário'),
    guests: Yup.number()
      .required('Informe o número de pessoas')
      .min(1, 'Pelo menos 1 pessoa')
      .max(10, 'Máximo 10 pessoas'),
    occasion: Yup.string().required('Selecione a ocasião'),
  });

  const handleSubmit = async (values) => {
    console.log('Submitting form with values:', values);
    const response = await submitAPI(values); // Submete a reserva

    if (response) {
      setReservation(values); // Adiciona a reserva ao contexto
      navigate('/confirmed'); // Navega para a página de confirmação
    } else {
      alert('Erro ao enviar a reserva');
    }
  };

  const fetchAvailableTimes = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      console.error('Data inválida:', date);
      return [];
    }
    const times = fetchAPI(date); // Chama a função fetchAPI para obter os horários disponíveis
    setAvailableTimes(times); // Atualiza o estado com os horários disponíveis
  };
  

  const updateTimes = (date, setFieldValue) => {
    setFieldValue('date', date); // Atualiza a data no estado do Formik
    if (date) {
      // Converte a string da data em um objeto Date
      const dateObj = new Date(date);
      fetchAvailableTimes(dateObj); // Passa o objeto Date para a função fetchAvailableTimes
    }
  };

  useEffect(() => {
    const today = new Date(); // Pega a data de hoje como um objeto Date
    fetchAvailableTimes(today); // Passa o objeto Date para a função fetchAvailableTimes
  }, []);

  return (
    <Formik
      initialValues={{
        date: reservationData?.date || '',
        time: reservationData?.time || '',
        guests: reservationData?.guests || 1,
        occasion: reservationData?.occasion || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} // Passando o handleSubmit para o Formik
    >
      {({ setFieldValue }) => (
        <Form className="reservation-form">
          {/* Campo Data */}
          <div>
            <label htmlFor="date">Data:</label>
            <Field
              id="date"
              name="date"
              type="date"
              onChange={(e) => updateTimes(e.target.value, setFieldValue)} // Atualiza a data no Formik e os horários
            />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          {/* Campo Horário */}
          <div>
            <label htmlFor="time">Horário:</label>
            <Field id="time" name="time" as="select">
              <option value="">Selecione</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage name="time" component="div" className="error" />
          </div>

          {/* Campo Pessoas */}
          <div>
            <label htmlFor="guests">Pessoas:</label>
            <Field id="guests" name="guests" type="number" min="1" max="10" />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>

          {/* Campo Ocasião */}
          <div>
            <label htmlFor="occasion">Ocasião:</label>
            <Field id="occasion" name="occasion" as="select">
              <option value="">Selecione</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" className="error" />
          </div>

          {/* Botão para submeter o formulário */}
          <button type="submit">Reservar</button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
