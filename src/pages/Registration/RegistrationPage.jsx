import { signup } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const RegistrationPage = () => {

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
	 const form = e.target;

	 const data = {
		name: form.elements.name.value,
		email: form.elements.email.value,
		password: form.elements.password.value,
	}

	dispatch(signup(data));
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
			<input 
          type="text" 
			 name="name"
          placeholder="Name" 
			 autoComplete="false"
          required 
        />
        <input 
          type="email"
			 name="email" 
          placeholder="Email" 
			 autoComplete="false"
          required 
        />
        <input 
          type="password" 
			 name="password"
          placeholder="Password" 
			 autoComplete="false"
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};