import "./App.css";
import {
  Navbar,
  HeroContent,
  Services,
  Works
} from "./components";

function App() {
  return (
    <div className="app">
      <header className="hero--container">
        <Navbar />
        <HeroContent />
        <Services />
        <Works />
      </header>
    </div>
  );
}

export default App;
