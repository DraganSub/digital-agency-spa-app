import "./App.css";
import { Navbar, HeroContent } from "./components";

function App() {
  return (
    <div className="app">
      <header className="hero--container">
        <Navbar />
        <HeroContent />
      </header>
    </div>
  );
}

export default App;
