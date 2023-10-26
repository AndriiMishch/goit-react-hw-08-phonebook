import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';

export default function PrivateRoute({ children }) {
  const isLogged = useSelector(selectUserIsLogged);
  return isLogged ? children : <Navigate to="/login" />;
}