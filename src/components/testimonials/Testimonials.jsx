import "./testimonials.css";
import { ContainerLayout } from "../../layouts"
import { TfiQuoteRight } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
export default function Testimonials() {
  return (
    <ContainerLayout
      title="Testimonials."
      background="var(--works-bg-color)"
      subTitle="we are more than digital agency"
    >

      <div className="flex testimonial-height">
        <section className="testimonials">
          {testimonialsUsers.map(user =>
            <TestimonialBox
              key={user.name}
              icon={user.icon}
              content={user.content}
              numberOfStars={user.numberOfStars}
              profileImgUrl={user.profileImgUrl}
              name={user.name}
              mark={user.mark}
            />
          )}
        </section>
        <div className=" testimonials--dots testimonials--slider-dots">
          <DotsSlider />
        </div>
      </div>
    </ContainerLayout>
  )
}


const TestimonialBox = (props) => {
  const {
    icon,
    content,
    numberOfStars,
    profileImgUrl,
    name,
    mark,
  } = props;

  const stars = Array(numberOfStars).fill(<AiFillStar />)

  return (
    <>
      <div className="flex-column flex-gap-3">
        <div className="testimonial-box">
          <div className="testimonial-box--icon">
            {icon}
          </div>
          <div className="testimonial-box--content">
            <p>
              {content}
            </p>
          </div>
          <div className="testimonial-box--stars">
            {stars}
          </div>
          <div className="testimonial-box--profile__pic">
            <img src={profileImgUrl} alt="profile" />
          </div>
        </div>
        <div>
          <div className="testimonial-box--name">
            {name}
          </div>
          <div className="testimonial-box--job__title">
            {mark}
          </div>
        </div>
      </div>
    </>
  )
}

const DotsSlider = () => {
  return (
    <div className="flex justify-center align-center">
      <BsDot className="active-dot" />
      <BsDot />
      <BsDot />
      <BsDot />
      <BsDot />
      <BsDot />
    </div>
  )
}

const testimonialsUsers = [
  {
    icon: <TfiQuoteRight />,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae in repellat tenetur ullam ipsum, optio, culpa neque quae minima accusantium quibusdam nam odit ea unde doloribus! Neque, nihil alias?",
    numberOfStars: 5,
    profileImgUrl: "assets/profile-imgs/p4.jpeg",
    name: "John Doe",
    mark: "Designation"
  },
  {
    icon: <TfiQuoteRight />,
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae in repellat tenetur ullam ipsum, optio, culpa neque quae minima accusantium quibusdam nam odit ea unde doloribus! Neque, nihil alias?",
    numberOfStars: 4,
    profileImgUrl: "assets/profile-imgs/p5.jpeg",
    name: "Julia Doe",
    mark: "Designation"
  },
  {
    icon: <TfiQuoteRight />,
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae in repellat tenetur ullam ipsum, optio, culpa neque quae minima accusantium quibusdam nam odit ea unde doloribus! Neque, nihil alias?",
    numberOfStars: 5,
    profileImgUrl: "assets/profile-imgs/p6.jpeg",
    name: "Jamila Doe",
    mark: "Designation"
  },
  {
    icon: <TfiQuoteRight />,
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae in repellat tenetur ullam ipsum, optio, culpa neque quae minima accusantium quibusdam nam odit ea unde doloribus! Neque, nihil alias?",
    numberOfStars: 4,
    profileImgUrl: "assets/profile-imgs/p7.jpeg",
    name: "Peter Doe",
    mark: "Designation"
  }
]