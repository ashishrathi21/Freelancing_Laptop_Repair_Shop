import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import RetroGridDemo from './components/Retro-grid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero />
      <Services />
     
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <RetroGridDemo/>
      <Footer />
    </div>
  );
}

export default App;
