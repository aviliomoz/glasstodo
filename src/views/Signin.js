import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { signin } from '../redux/actions/authActions';

export const Signin = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signin(
        formValues.name,
        formValues.lastname,
        formValues.email,
        formValues.password,
      ),
    );
  };

  return (
    <div className="signin">
      <div className="signin-header">
        <div className="signin-header-logo">
          <div className="signin-header-logo-card-1"></div>
          <div className="signin-header-logo-card-2"></div>
          <div className="signin-header-logo-card-3"></div>
        </div>
        <h1 className="signin-header-title">Mis Tareas</h1>
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
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
          placeholder="Apellido"
          name="lastname"
          type="text"
          value={formValues.lastname}
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
        <button className="signin-button" type="submit">
          Entrar
        </button>
        <Link to="/login">Ya tengo cuenta</Link>
      </form>
    </div>
  );
};
