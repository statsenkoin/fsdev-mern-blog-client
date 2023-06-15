import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  gap: 20px;
  padding: 5px 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: var(--color-text-light);
  &.active {
    color: var(--color-text-active);
  }
`;
