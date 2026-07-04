import Nav from './components/Nav';
import Hero from './components/Hero';
import NetworkBackground from './components/NetworkBackground';
import About from './components/About';
import Experience from './components/Experience';
import Systems from './components/Systems';
import Skills from './components/Skills';
import CertEdu from './components/CertEdu';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NetworkBackground />
      <div className="grain-overlay" />
      <Nav />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Systems />
        <Skills />
        <CertEdu />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
