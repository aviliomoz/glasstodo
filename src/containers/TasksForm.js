import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from '../components/Calendar';
import { useForm } from '../hooks/useForm';
import { createTask } from '../redux/actions/todoActions';

export const TasksForm = ({ toggleCalendarBox }) => {
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.auth);
  const { activeDate } = useSelector((state) => state.date);

  const [formValues, handleInputChange, reset] = useForm({
    time: '00:00',
    title: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    reset();
    dispatch(
      createTask({
        ...formValues,
        user: uid,
        date: activeDate,
        time: moment(formValues.time, 'h:mm').format('hh:mm a'),
      }),
    );
    toggleCalendarBox();
  };

  const disableSubmit = () => {
    if (
      activeDate === '' ||
      formValues.time === '' ||
      formValues.title === '' ||
      formValues.description === ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tasks-form">
      <section className="tasks-form-calendar">
        <Calendar />
      </section>
      <section className="tasks-form-editor">
        <div className="tasks-form-editor-date">
          <input
            autoComplete="off"
            className="tasks-form-editor-date-1"
            type="text"
            name="date"
            value={activeDate}
            placeholder="Selecciona una fecha"
            disabled={true}
          />
          <input
            autoComplete="off"
            className="tasks-form-editor-date-2"
            type="time"
            name="time"
            value={formValues.time}
            onChange={handleInputChange}
          />
        </div>
        <input
          autoComplete="off"
          type="text"
          name="title"
          placeholder="Título"
          value={formValues.title}
          onChange={handleInputChange}
        />
        <input
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Descripción"
          value={formValues.description}
          onChange={handleInputChange}
        />
        <button disabled={disableSubmit()} type="submit">
          Crear tarea
        </button>
      </section>
    </form>
  );
};
