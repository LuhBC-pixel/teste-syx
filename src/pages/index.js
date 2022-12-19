import { Cases } from '../components/Cases';
import { Comment } from '../components/Comment';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Recovery } from '../components/Recovery';
import { SYKForm } from '../components/SYKForm';
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
          <Comment />
        </div>
        <div>
          <SYKForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
