import "./navbar.css"
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--header-title">
        <h1>Zamil</h1>
      </div>
      <div className="flex nav-links">
        <div>
          <p className="nav-link active arrow">Home</p>
        </div>
        <div>
          <p className="nav-link arrow">Services</p>
        </div>
        <div>
          <p className="nav-link">Works</p>
        </div>
        <div>
          <p className="nav-link">About</p>
        </div>
        <div>
          <p className="nav-link">Blog</p>
        </div>
        <div>
          <p className="nav-link border-around arrow">Contact</p>
        </div>
        <div>
          <p className="nav-link nav-link--icon"><FaSearch /></p>
        </div>
      </div>
    </nav>
  )
}
