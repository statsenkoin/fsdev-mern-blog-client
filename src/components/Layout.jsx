import React from 'react';

import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      {children}
    </React.Fragment>
  );
};
