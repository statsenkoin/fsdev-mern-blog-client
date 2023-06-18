import React from 'react';

import { NavLinkStyled, NavBox } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavBox>
      <NavLinkStyled to="/" end>
        Logo/Home
      </NavLinkStyled>
      {<NavLinkStyled to="/posts">Posts</NavLinkStyled>}
      {<NavLinkStyled to="/add_post">AddPost</NavLinkStyled>}
    </NavBox>
  );
};
