import { CardRecovery } from '../CardRecovery';
import { Container, Title } from './styles';

export function Recovery() {
  return (
    <>
      <Title>Recuperação de valores acima do esperado</Title>
      <Container>
        <CardRecovery
          sourceImg='/caminhao.png'
          title='Fiat Strada Adventure 1.4 Flex 2014/2015'
          percent='30'
          rest='38'
        />
        <CardRecovery
          sourceImg='/carro.png'
          title='Chevrolet Cobalt 1.8 ALTZ Flex 2017/2018'
          percent='24'
          rest='94'
        />
        <CardRecovery
          sourceImg='/eletronico.png'
          title='Volkswagen Nova Saveiro CE Cross 1.6 Flex 2013/2014'
          percent='25'
          rest='40'
        />
        <CardRecovery
          sourceImg='/equip.png'
          title='Fiat Strada Adventure 1.4 Flex 2014/2015'
          percent='30'
          rest='38'
        />
      </Container>
    </>
  );
}
