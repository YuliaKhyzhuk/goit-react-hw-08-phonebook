import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { login } from '../redux/auth/authOperations';

import Section from 'components/Section/Section';

import Button from '@mui/material/Button';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Section title="Log In">
        <form autoComplete="off" onSubmit={handleSubmit}           style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 10,
            }}
          >
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 10,
            }}
          >
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </form>
      </Section>
    </div>
  );
};

export default LoginPage;
