import { signin } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
	const dispatch = useDispatch();

	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		
		dispatch(signin({ 
			email: form.elements.email.value,
			password: form.elements.password.value
		}));
	}
	return (
		<form onSubmit={handleOnSubmit}>
			<input type="text" name="email" autoComplete="false" />
			<input type="password" name="password" autoComplete="false" />
			<button>login</button>
		</form>
	);
}