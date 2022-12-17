import { Box, Container, Content, Image, Name, Subtitle, Text } from './styles';

export const CardComment = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Content>
        <Image />
        <Box>
          <Name>Nome da pessoa</Name>
          <Subtitle>Nome da empresa</Subtitle>
        </Box>
      </Content>
    </Container>
  );
};
