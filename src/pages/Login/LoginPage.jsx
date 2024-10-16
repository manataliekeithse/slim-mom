import { signin } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import css from './LoginPage.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      signin({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <form className="login-container" onSubmit={handleOnSubmit}>
      <h2 className="login-title">
        <b>LOG IN</b>
      </h2>
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="login-input"
        autoComplete="false"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="login-input"
        autoComplete="false"
      />
      <button className="btn">Login</button>
      <button className="btn">Register</button>
    </form>
  );
};
