import "./navbar.css"
import { FaSearch } from "react-icons/fa";
import useWindowDimensions from "../../utils/useWindowsDimensions";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {

  const { width } = useWindowDimensions();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  useMemo(() => {
    if (width > 1280) {
      console.log("hello")
      setIsNavbarOpen(true);
    }
  }, [isNavbarOpen, width]) //eslint-disable-line

  return (
    <nav className="navbar">
      <div className="navbar--header-title">
        <h1>Zamil</h1>
      </div>
      <div className="hamburger" onClick={() => setIsNavbarOpen(true)}>
        <GiHamburgerMenu />
      </div>
      {isNavbarOpen &&
        <div className="flex nav-links">
          <div className="x-btn" onClick={() => setIsNavbarOpen(false)}>
            <RxCross2 />
          </div>
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
      }
    </nav >
  )
}
