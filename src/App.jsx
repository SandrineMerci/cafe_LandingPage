import Hero from './components/Hero';
import Services from './components/Services';
import Mission from './components/Mission';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Head from './components/Head';

function App() {
  return (
    <div className="font-sans">
      <Head/>
      <Hero />
      <Services />
      <About />
    <Benefits />
        <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
