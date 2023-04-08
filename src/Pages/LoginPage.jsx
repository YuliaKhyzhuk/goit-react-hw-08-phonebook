import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { authOperations } from 'redux/auth';
import Section from 'components/Section/Section';


const LoginPage = () =>  {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Section title="Log In">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </Section>
    </div>
  );
}

export default LoginPage;
