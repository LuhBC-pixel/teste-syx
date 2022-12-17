import Image from 'next/image';
import {
  Box,
  Card,
  Container,
  Content,
  DivImg,
  LargePercent,
  SmallPercent,
  Text,
  Title,
} from './styles';
import { AiOutlineRise } from 'react-icons/ai';
import { COLORS } from '../../styles/theme';

export const CardRecovery = ({ sourceImg, title, percent, rest }) => {
  return (
    <Card>
      <Container>
        <DivImg>
          <Image src={sourceImg} alt='foto de carro' width={250} height={180} />
        </DivImg>
        <Content>
          <Title>{title}</Title>
          <Box>
            <LargePercent>
              +{percent}
              <SmallPercent>.{rest}</SmallPercent>%
            </LargePercent>{' '}
            <AiOutlineRise color={COLORS.Colord0fc02} size={50} style={{transform: 'translatey(0.5rem)'}} />
          </Box>
          <Text>do valor esperado pelo cliente</Text>
        </Content>
      </Container>
    </Card>
  );
};
