import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";

export const PrivateRoutes = ({ component: Component, redirectedTo="/"}) => {
	const { isLoggedIn } = useAuth();
	return !isLoggedIn ? <Navigate to={redirectedTo} /> : <Component />;
}