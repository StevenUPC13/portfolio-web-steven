import AnimatedBackground from './components/common/AnimatedBackground.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Footer from './components/layout/Footer.jsx';
import Navbar from './components/layout/Navbar.jsx';
import About from './components/sections/About.jsx';
import Certificates from './components/sections/Certificates.jsx';
import Contact from './components/sections/Contact.jsx';
import Experience from './components/sections/Experience.jsx';
import Home from './components/sections/Home.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-dark-primary text-slate-100">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
