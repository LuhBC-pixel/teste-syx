import {
  Button,
  Checkbox,
  Container,
  ContainerCheckbox,
  Input,
  Label,
} from './styles';

export const Form = () => {
  return (
    <form>
      <Container>
        <Input type='text' placeholder='Nome' />
        <Input type='email' placeholder='E-mail' />
        <Input type='tel' placeholder='Telefone' />
        <ContainerCheckbox>
          <Checkbox type='checkbox' id='message' />
          <Label htmlFor='message'>
            Aceito receber mensagens através do WhatsApp
          </Label>
        </ContainerCheckbox>
        <Button>Fale com um consultor</Button>
      </Container>
    </form>
  );
};
