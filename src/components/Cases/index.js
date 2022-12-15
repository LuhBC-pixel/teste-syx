import { CardCases } from '../CardCases';
import { Container, Title } from './styles';

export function Cases() {
  return (
    <>
      <Title>Cases de sucesso</Title>
      <Container>
        <CardCases
          information='Metal Mecânica'
          title='125%'
          text1='Em 5 dias, vendemos posições porta pallets.'
          price='R$567.686,80'
        />
        <CardCases
          information='Infraestrutura'
          title='192%'
          text1='Em 15 dias, vendemos 5008ton. De sucata metálica.'
          price='R$4.8M'
        />
        <CardCases
          information='Florestal'
          title='170%'
          text='Em 8 dias, vendemos um Trator Valtra 2014 BR 165 Munck TMO C7.60.'
          price='R$121.000,00'
        />
        <CardCases
          information='Mineração'
          title='225%'
          text='Em 7 dias, vendemos 550 ton de tijolos refratários.'
          price='R$430.650,00'
        />
      </Container>
    </>
  );
}
