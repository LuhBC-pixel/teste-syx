import {
  Container,
  Logo,
  MenuList,
  Item,
  ButtonSales,
  ButtonLogin,
} from './styles';

export function Navbar() {
  return (
    <Container>
      <Logo>syx</Logo>
      <div>
        <MenuList>
          <Item>Cases</Item>
          <Item>Blog</Item>
          <Item>FAQ</Item>
          <Item>Sobre a SYX</Item>
          <li>
            <ButtonSales>QUERO VENDER</ButtonSales>
          </li>
          <li>
            <ButtonLogin>Log in</ButtonLogin>
          </li>
        </MenuList>
      </div>
    </Container>
  );
}
