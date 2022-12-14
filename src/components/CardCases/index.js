import {
  Box,
  Container,
  ContainerMain,
  Image,
  Information,
  Price,
  Subtitle,
  Text,
  Title,
} from './styles';

export const CardCases = ({ information, title, text, price }) => {
  return (
    <Container>
      <Information>{information}</Information>
      <ContainerMain>
        <Title>{title}</Title>
        <Subtitle>de aumento de receita</Subtitle>
      </ContainerMain>
      <Box>
        <Text>{text}</Text>
      </Box>
      <Box>
        <Text>Resultando um ganho adicional de </Text>
        <Price>{price}</Price>
      </Box>
      <Image>
        <img src='klabin.png' alt='logo klabin' width={58} height={40} />
      </Image>
    </Container>
  );
};
