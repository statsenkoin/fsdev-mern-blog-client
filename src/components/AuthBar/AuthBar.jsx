import React from 'react';
import { useDispatch } from 'react-redux';

import { AuthBox, NavLinkStyled, User } from './AuthBar.styled';
import { useAuthSelector } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const AuthBar = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuthSelector();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthBox>
      {/* {isLoggedIn && <User>{name}</User>} */}
      {isLoggedIn ? (
        <>
          <User>{user.name}</User>
          <NavLinkStyled to="/home" onClick={onLogout}>
            Logout
          </NavLinkStyled>
        </>
      ) : (
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      )}
    </AuthBox>
  );
};
