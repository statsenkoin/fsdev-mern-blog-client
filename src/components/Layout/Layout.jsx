import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar, Loading } from 'components';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
