import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserIsLogged } from 'redux/auth/selectors';

export default function HomePage() {
  const navigate = useNavigate();
  const isLogged = useSelector(selectUserIsLogged);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: 300,
      }}
    >
      <h1 style={{ marginBottom: 20 }}>
      </h1>
      {!isLogged ? (
        <Button variant="contained" onClick={() => navigate('/login')}>
          Log In
        </Button>
        
      ) : (
        <Button variant="contained" onClick={() => navigate('/contacts')}>
          Contacts
        </Button>
      )}
    </div>
  );
}