import "./inquiry.css";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs";
export default function Inquiry() {
  return (
    <div className="inquiry-container">
      <div className="inquiry-social__icons">
        <span><BsFacebook /></span>
        <span><AiOutlineTwitter /></span>
        <span><AiOutlineInstagram /></span>
        <span><AiFillYoutube /></span>
      </div>
      <h1>Have any project in mind?</h1>
      <button className="inquiry-btn">
        Make inquiry
      </button>
    </div>
  )
}
