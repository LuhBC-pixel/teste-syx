import { Form } from '../Form';
import { Container, ContainerTitle, Subtitle, Title } from './styles';

export function SYKForm() {
  return (
    <Container>
      <ContainerTitle>
        <Title>Traga seus estoques para a SYX</Title>
        <div>
          <Subtitle>
            Faça parte do futuro da venda de frotas corporativas usadas e ativos
            industrais
          </Subtitle>
        </div>
      </ContainerTitle>
      <div>
        <Form />
      </div>
    </Container>
  );
}
