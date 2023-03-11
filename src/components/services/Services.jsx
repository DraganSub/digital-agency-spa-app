import { VscGraph } from "react-icons/vsc";
import { BsPencil, BsBrush, BsGraphUpArrow, BsGlobe, BsBookmark } from "react-icons/bs";
import { ContainerLayout } from "../../layouts";
import "./services.css";

export default function Services() {
  return (
    <ContainerLayout
      title="Services."
      subTitle="Our services for clients"
      background="var(--services-bg-color)"
    >
      <section className="service-container">
        {servicesData.map(service => <ServiceBox key={service.title} service={service} />)}
      </section>
    </ContainerLayout>
  )
}


const ServiceBox = (props) => {
  const {
    icon,
    title,
    content
  } = props.service;

  return (
    <div className="flex-column service-box">
      <span className="service-box__icon">{icon}</span>
      <h2 className="service-box__title">{title}</h2>
      <p className="service-box__content">
        {content}
      </p>
    </div>
  )
}

const servicesData = [
  {
    icon: <BsGraphUpArrow />,
    title: "Digital Strategy.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
  {
    icon: <BsPencil />,
    title: "UX Designs.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
  {
    icon: <BsBrush />,
    title: "UI Designs.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
  {
    icon: <BsGlobe />,
    title: "Social Media.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
  {
    icon: <BsBookmark />,
    title: "Design Concept.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
  {
    icon: <VscGraph />,
    title: "Media Pairing.",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ab labore commodi."
  },
]



