import {
  Container,
  ContainerContent,
  ContainerTitle,
  Content,
  Image,
  Title,
  Titlep,
} from './styles';

export function Hero() {
  return (
    <Container>
      <div>
        <ContainerTitle>
          <Title>Desde 2012</Title>
          <Titlep>colecionando histórias para contar</Titlep>
        </ContainerTitle>
        <ContainerContent>
          <Content>
            A cada evento de venda disputada, a cada processo de loteamento e a
            cada preparação de máquinas e equipamentos para a venda, temos
            histórias de clientes satisfeitos, números acima das expectativas e
            resultados alcançados.
          </Content>
        </ContainerContent>
      </div>
      <div>
        <Image></Image>
      </div>
    </Container>
  );
}
