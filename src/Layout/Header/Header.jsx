import { HeaderStyled, Wrapper } from './Header.styled';
import { NavBar, AuthBar } from 'components';

export function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <NavBar />
        <AuthBar />
      </Wrapper>
    </HeaderStyled>
  );
}
