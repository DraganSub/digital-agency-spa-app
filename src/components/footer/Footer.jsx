import "./footer.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { VscCalendar } from "react-icons/vsc";
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrap">
        <div className="footer">
          <div className="footer-top">
            <div className="footer-head">
              <h1 className="footer-head__title">Zamil</h1>
              <p className="footer-head__subtitle">We are more than a digital agency</p>
            </div>
            <div className="footer-head__contact">
              <h1 className="footer-head--title">Contact Us</h1>
              <div className="footer-contact--wrap">
                <BsTelephone className="contact-icon" />
                <h4>+(880) 1967979110</h4>
              </div>
              <div className="footer-contact--wrap">
                <MdOutlineMarkEmailUnread className="contact-icon" />
                <h4>hellozamil@gmail.com</h4>
              </div>
              <div className="footer-contact--wrap">
                <TfiLocationPin className="contact-icon" />
                <h4>West Virginia, USA</h4>
              </div>
              <div className="footer-contact--wrap">
                <VscCalendar className="contact-icon" />
                <h4>Sunday to Friday</h4>
              </div>
            </div>
            <div className="footer-flex--wrap">
              <h1 className="footer-head--title">Our services</h1>
              <h5>Single Project</h5>
              <h5>Services 1</h5>
              <h5>Services 2</h5>
              <h5>Works</h5>
            </div>
            <div className="footer-flex--wrap">
              <h1 className="footer-head--title">About us</h1>
              <h5>About</h5>
              <h5>Blog</h5>
              <h5>Contact 1</h5>
              <h5>Contact 2</h5>
            </div>
          </div>
        </div >
      </footer>
      <div className="footer-wrap">
        <hr className="hr" ></hr>
        <div className="footer-bottom">
          <div className="flex-column">
            <div className="footer-botom__info">
              <h4>Copyright 2021 Zamil</h4>
              <h4 className="footer-link">privacy policy</h4>
              <h4 className="footer-link">terms of use</h4>
            </div>
            <div className="footer-botom__social">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quasi, ut voluptate illum suscipit nobis quia dicta excepturi amet officia, dolorum consequuntur facilis odio.</h4>
              <div class="footer-icons">
                <span><BsFacebook /></span>
                <span><AiOutlineTwitter /></span>
                <span><AiOutlineInstagram /></span>
                <span><AiFillYoutube /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
