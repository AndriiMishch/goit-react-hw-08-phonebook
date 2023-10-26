import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { refresh } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
// import PrivateRoute from 'PrivateRoute';
// import PublicRoute from 'PublicRoute';

import SharedLayout from 'layout';
// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import RegisterPage from 'pages/RegisterPage';
// import ContactsPage from 'pages/ContactsPage';

const PublicRoute = lazy(() => import('PublicRoute'));
const PrivateRoute = lazy(() => import('PrivateRoute'));

// const SharedLayout = lazy(() => import('layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}