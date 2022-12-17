import { Cases } from '../components/Cases';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Recovery } from '../components/Recovery';
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
          <Recovery />
        </div>
        <div>
         
        </div>
      </div>
      <div></div>
    </>
  );
}
