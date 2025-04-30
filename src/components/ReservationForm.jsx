import './ReservationForm.css'
import { useAppContext } from '../context/AppContext';

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';

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
    const response = await submitAPI(values);

    if (response) {
      setReservation(values);
      navigate('/confirmed');
    } else {
      alert('Erro ao enviar a reserva');
    }
  };

  const fetchAvailableTimes = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      console.error('Data inválida:', date);
      return [];
    }
    const times = fetchAPI(date);
    setAvailableTimes(times);
  };
  

  const updateTimes = (date, setFieldValue) => {
    setFieldValue('date', date);
    if (date) {
      const dateObj = new Date(date);
      fetchAvailableTimes(dateObj);
    }
  };

  useEffect(() => {
    const today = new Date();
    fetchAvailableTimes(today);
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
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="reservation-form">
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
          <div>
            <label htmlFor="guests">Pessoas:</label>
            <Field id="guests" name="guests" type="number" min="1" max="10" />
            <ErrorMessage name="guests" component="div" className="error" />
          </div>
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
          <button type="submit">Reservar</button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
