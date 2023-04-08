import React from 'react';
import { Suspense } from 'react';
import Header from '../Header/Header';
// import Filter from './Filter/Filter';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
