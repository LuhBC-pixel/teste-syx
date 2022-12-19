import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsWhatsapp,
} from 'react-icons/bs';
import {
  Address,
  Box,
  BoxMain,
  BoxTitle,
  Container,
  ContainerFooter,
  Content,
  Link,
  MainTitle,
  Separator,
  SubTitle,
  Title,
} from './styles';

export function Footer() {
  return (
    <Container>
      <footer>
        <ContainerFooter>
          <BoxMain>
            <BoxTitle>
              <Title>syx</Title>
              <SubTitle>GLOBAL REUSE NETWORK</SubTitle>
            </BoxTitle>
            <Address>Rua Sete de Setembro, 1271</Address>
            <Address>Campo Largo - PR - Brasil</Address>
            <Address>83601-170</Address>
            <Separator />
            <Address>41 3054-4200</Address>
          </BoxMain>
          <Content>
            <MainTitle>Menu Principal</MainTitle>
            <Link>Cases</Link>
            <Link>Blog</Link>
            <Link>FAQ</Link>
          </Content>
          <Content>
            <MainTitle>A SYX</MainTitle>
            <Link>Quem somos</Link>
            <Link>O que fazemos</Link>
            <Link>Imprensa</Link>
          </Content>
          <Content>
            <MainTitle>Redes Sociais</MainTitle>
            <Box>
              <BsInstagram size={20} color='#fff' />
              <BsFacebook size={20} color='#fff' />
              <BsTwitter size={20} color='#fff' />
              <BsYoutube size={20} color='#fff' />
              <BsWhatsapp size={20} color='#fff' />
            </Box>
          </Content>
        </ContainerFooter>
      </footer>
    </Container>
  );
}
