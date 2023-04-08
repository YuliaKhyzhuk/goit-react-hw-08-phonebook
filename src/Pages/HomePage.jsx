import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {selectIsLoggedIn} from 'redux/auth/authSelectors';

const HomePage = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <h1>Welcome to your favorite phonebook!</h1>
        {!isLoggedIn ? 
        (<h3>
          Please <NavLink to="/register">register</NavLink> or
          <NavLink to="/login">log in</NavLink> to continue!
        </h3>) 
        : (
        <h3>
          Please find <NavLink to="/contacts"> your contacts here! </NavLink> 
        </h3>)}
      </div>
    </>
  );
};

export default HomePage;
