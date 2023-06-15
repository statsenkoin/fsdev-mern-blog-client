import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  box-shadow: var(--box-shadow);
  background: var(--linear-gradient);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 12px 24px;
  max-width: 900px;
  margin-inline: auto;
`;
