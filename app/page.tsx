import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
