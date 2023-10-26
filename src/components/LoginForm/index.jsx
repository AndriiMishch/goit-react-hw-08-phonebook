import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const defaultTheme = createTheme();

export default function LogInForm() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    toast.promise(
      dispatch(logIn(userData)).unwrap(),
      {
        loading: 'Loading',
        success: data => {
          return `You have logged`;
        },
        error: err => `Invalid user data`,
      },
      {
        style: {},
        success: {
          duration: 5000,
        },
      }
    );

    event.target.reset();
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="user@mail.com"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                bacground-color = '#9b9ea3'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>

              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <Toaster />
    </>
  );
}