import { FooterStyled, Text } from './Footer.styled';
import { AiOutlineCopyright } from 'react-icons/ai';

export function Footer() {
  return (
    <FooterStyled>
      <Text href="https://github.com/statsenkoin/" target="blank">
        Disigned by Ihor Statsenko
      </Text>
      <AiOutlineCopyright />
      <Text href="https://m.goit.global/ua/new/" target="blank">
        GoIT 2023
      </Text>
    </FooterStyled>
  );
}
