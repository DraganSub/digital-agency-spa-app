import "./App.css";
import {
  Navbar,
  HeroContent,
  Services,
  Works,
  About,
  Testimonials,
  LattestNews,
  Footer
} from "./components";
import Inquiry from "./components/inquiry/Inquiry";

function App() {
  return (
    <div className="app">
      <header className="hero--container">
        <Navbar />
        <HeroContent />
        <Services />
        <Works />
        <About />
        <Testimonials />
        <LattestNews />
        <Inquiry />
        <Footer />
      </header>
    </div>
  );
}

export default App;
