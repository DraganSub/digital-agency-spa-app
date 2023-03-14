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
    <div className="app hero--container">
      <header>
        <Navbar />
        <HeroContent />
      </header>
      <main>
        <Services />
        <Works />
        <About />
        <Testimonials />
        <LattestNews />
        <Inquiry />
      </main>
      <Footer />

    </div>
  );
}

export default App;
