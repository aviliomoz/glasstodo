import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { login } from '../redux/actions/authActions';

export const Login = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues.email, formValues.password));
  };

  return (
    <div className="login">
      <div className="login-header">
        <div className="login-header-logo">
          <div className="login-header-logo-card-1"></div>
          <div className="login-header-logo-card-2"></div>
          <div className="login-header-logo-card-3"></div>
        </div>
        <h1 className="login-header-title">Mis Tareas</h1>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button className="login-button" type="submit">
          Entrar
        </button>
        <Link to="/signin">Registrarse</Link>
      </form>
    </div>
  );
};
