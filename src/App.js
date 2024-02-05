import "./App.css";
import profileImg from "../src/assets/img/profile-img.jpg";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <Header />
      <HeroSection />
      <main id="main">
        <About />
        <Stats />
        <Skills />

        <Resume />

        <Services />

        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Helmet>
        <script src="../assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="../assets/vendor/aos/aos.js"></script>
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="../assets/vendor/typed.js/typed.umd.js"></script>
        <script src="../assets/vendor/waypoints/noframework.waypoints.js"></script>
        <script src="../assets/vendor/php-email-form/validate.js"></script>
        <script src="../assets/js/main.js"></script>
      </Helmet>
    </>
  );
}

export default App;
