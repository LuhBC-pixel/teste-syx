import { SiPoly } from 'react-icons/si';
import { CardComment } from '../CardComment';
import { Container, FirstColumn, Title, Separator } from './styles';

export function Comment() {
  return (
    <>
      <Title>
        <SiPoly size={45} style={{ transform: 'translatey(1rem)' }} /> Quem
        compra uma vez… Compra mais!
      </Title>
      <Container>
        <div>
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />
          <Separator />
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley' />
        </div>
        <div>
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley' />
          <Separator />
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' />
        </div>
        <div>
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley' />
          <Separator />
          <CardComment text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley' />
        </div>
      </Container>
    </>
  );
}
