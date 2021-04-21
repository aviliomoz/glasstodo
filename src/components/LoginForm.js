import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { login } from '../redux/actions/authActions';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { errorMessage } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues.email, formValues.password));
  };

  return (
    <form onSubmit={handleSubmit} className="auth-layout-form">
      <h2>Iniciar sesión</h2>

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
      {errorMessage && <span>{errorMessage}</span>}
      <button className="auth-layout-button" type="submit">
        Entrar
      </button>
      <Link to="/signin">Registrarse</Link>
    </form>
  );
};
