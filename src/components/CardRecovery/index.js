import Image from 'next/image';
import { Container, Content, DivImg, Title } from './styles';

export const CardRecovery = ({ sourceImg, title }) => {
  return (
    <Container>
      <DivImg>
        <Image src={sourceImg} alt='foto de carro' />
      </DivImg>
      <Content>
        <Title>{title}</Title>
        <div>
          <p></p>
          <img src='' alt='' />
        </div>
        <p>do valor esperado pelo cliente</p>
      </Content>
    </Container>
  );
};
