import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-light);
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  background: var(--linear-gradient);
`;

export const Text = styled.a`
  padding-inline: 8px;
  font-size: 18px;
  color: var(--color-text-light);
  text-decoration: none;

  &:hover {
    color: var(--color-text-active);
  }
`;
