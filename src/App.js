import "./App.css";
import {
  Navbar,
  HeroContent,
  Services,
  Works,
  About
} from "./components";

function App() {
  return (
    <div className="app">
      <header className="hero--container">
        <Navbar />
        <HeroContent />
        <Services />
        <Works />
        <About />
      </header>
    </div>
  );
}

export default App;
