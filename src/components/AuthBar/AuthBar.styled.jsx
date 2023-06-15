import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const User = styled.p`
  font-size: 16px;
  color: var(--color-text-light);
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px 20px;
  border: 1px solid var(--color-text-dark);
  border-radius: 6px;
  text-decoration: none;
  color: var(--color-text-light);
  transition: box-shadow 250ms linear, transform 250ms linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--box-shadow);
  }
`;
