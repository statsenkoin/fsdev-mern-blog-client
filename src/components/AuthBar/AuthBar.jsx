import React from 'react';
import { AuthBox, NavLinkStyled, User } from './AuthBar.styled';

export const AuthBar = () => {
  return (
    <AuthBox>
      <User>UserName</User>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
    </AuthBox>
  );
};
