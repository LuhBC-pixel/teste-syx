import { SiPoly } from 'react-icons/si';
import { CardComment } from '../CardComment';

export function Comment() {
  return (
    <>
      <div>
        <SiPoly />
        <h2>Quem compra uma vez… Compra mais!</h2>
      </div>
      <div>
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
        <CardComment />
      </div>
    </>
  );
}
