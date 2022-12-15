import {
  Box,
  Container,
  ContainerMain,
  Image,
  Information,
  Price,
  Text,
} from './styles';
import Klabin from '../../assets/Klabin.png';

export const CardCases = ({ information, title, text, price }) => {
  return (
    <Container>
      <Information>{information}</Information>
      <ContainerMain>
        <h3>{title}</h3>
        <span>de aumento de receita</span>
      </ContainerMain>
      <Box>
        <Text>{text}</Text>
      </Box>
      <Box>
        <Text>Resultando um ganho adicional de</Text>
        <Price>{price}</Price>
      </Box>
      <Image src={Klabin} />
    </Container>
  );
};
