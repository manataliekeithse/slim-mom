import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice.js";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  const logIn = (user) => dispatch(login(user));
  const logOut = () => dispatch(logout());

  return { isAuthenticated, username, logIn, logOut };
};