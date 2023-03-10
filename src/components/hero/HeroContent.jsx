import "./heroContent.css";
import { IoMdPaperPlane } from "react-icons/io"
import { GiBrain } from "react-icons/gi"
import { HiOutlineLightBulb } from "react-icons/hi";

export default function HeroContent() {
  return (
    <section className="flex-column hero-wrap">
      <div className="flex-column hero--wrap__info">
        <h3 className="hero-wrap__subtitle">Creative mind, creative works.</h3>
        <h1 className="hero-wrap__title">We are digital agency. </h1>
        <button className="hero-wrap--btn">Getting Started</button>
      </div>
      <div className="flex-column hero--wrap__containers">
        <div className="flex-column hero-box">
          <span className="hero__box-icon"><IoMdPaperPlane /></span>
          <h2 className="hero__box-title">Future Concept.</h2>
          <p className="hero__box-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi.
          </p>
        </div>
        <div className="flex-column hero-box box-active">
          <span className="hero__box-icon"><GiBrain /></span>
          <h2 className="hero__box-title">The Bid Ideas.</h2>
          <p className="hero__box-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi.
          </p>
        </div>
        <div className="flex-column hero-box">
          <span className="hero__box-icon"><HiOutlineLightBulb /></span>
          <h2 className="hero__box-title">Creative Solutions.</h2>
          <p className="hero__box-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi.
          </p>
        </div>
      </div>
    </section>
  )
}
