import { ContainerLayout } from "../../layouts";
import "./works.css";

export default function Works() {
  return (
    <ContainerLayout
      title="Works"
      subTitle="Thins we've made"
      button="view all"
      background={"var(--works-bg-color)"}
    >
      <div className="fix-height">
        <section className="works">
          <span className="work image-1"></span>
          <span className="work image-2"></span>
          <span className="work image-3"></span>
          <span className="work image-4"></span>
          <span className="work image-5"></span>
          <span className="work image-6"></span>
        </section>
      </div>
    </ContainerLayout>
  )
}
