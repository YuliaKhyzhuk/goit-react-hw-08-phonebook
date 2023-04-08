import React, { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

import HomePage from 'Pages/HomePage';

import Loader from './Loader/Loader';
import Layout from './Layout/Layout';

import { selectIsRefreshing } from 'redux/auth/authSelectors';
import ContactsPage from 'Pages/ContactsPage';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};

export default App;
