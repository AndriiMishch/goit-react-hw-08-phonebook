import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';

export default function PublicRoute({ children }) {
  const isLogged = useSelector(selectUserIsLogged);

  return isLogged ? <Navigate to="/contacts" /> : children;
}