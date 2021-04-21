import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { signin } from '../redux/actions/authActions';

export const SigninForm = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formValues.name, formValues.email, formValues.password));
  };

  return (
    <form onSubmit={handleSubmit} className="auth-layout-form">
      <h2>Registrarse</h2>
      <input
        autoComplete="off"
        placeholder="Nombre"
        name="name"
        type="text"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <input
        autoComplete="off"
        placeholder="Email"
        name="email"
        type="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <input
        autoComplete="off"
        placeholder="Password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <button className="auth-layout-button" type="submit">
        Entrar
      </button>
      <Link to="/login">Ya tengo cuenta</Link>
    </form>
  );
};
