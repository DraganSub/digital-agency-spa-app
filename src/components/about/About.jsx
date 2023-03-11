import { ContainerLayout } from "../../layouts";
import "./about.css";

export default function About() {
  return (
    <ContainerLayout
      title="About."
      subTitle="we are more than digital agency"
      background="var(--services-bg-color)"
    >
      <section className="about-container">
        <div className="about-main">
          <div className="about-option--wrap">
            <div className="about-option__title">
              Team Work
          </div>
            <div className="about-option__desc">
              Commited and creative
            </div>
          </div>
        </div>
        <div className="about-side--a">
          <div className="about-option--wrap">
            <div className="about-option__title">
              Philosohpy
          </div>
            <div className="about-option__desc">
              Trust pays off
            </div>
          </div>
        </div>
        <div className="about-side--b">
          <div className="about-option--wrap">
            <div className="about-option__title">
              Office
          </div>
            <div className="about-option__desc">
              Somewhere on earth
            </div>
          </div>
        </div>
        <div className="about-flex--group">
          <div className="about-content--box">
            <h1 className="about-content--title">Who we are</h1>
            <p className="about-content--content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate beatae similique sit nemo quae quod totam itaque.</p>
          </div>
          <div className="about-content--box">
            <h1 className="about-content--title">Our Philosophy</h1>
            <p className="about-content--content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate beatae similique sit nemo quae quod totam itaque.</p>
          </div>
          <div className="about-content--box">
            <h1 className="about-content--title">How we work</h1>
            <p className="about-content--content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate beatae similique sit nemo quae quod totam itaque.</p>
          </div>
        </div>
      </section>
    </ContainerLayout>
  )
}
