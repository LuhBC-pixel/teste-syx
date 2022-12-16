import { Cases } from '../components/Cases';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { DivCases } from '../components/styles';

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Hero />
      <div>
        <DivCases>
          <Cases />
        </DivCases>
        <div>
          <h2>Recuperação de valores acima do esperado</h2>
        </div>
        <div>
          <h2>
            <span></span> Quem compra uma vez… Compra mais!
          </h2>
        </div>
      </div>
      <div></div>
    </>
  );
}
