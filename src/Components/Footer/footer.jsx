import "./footer.css";
import HerbalLogo from "../../Images/HerbalLogo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-left-side">
          <h4>Contact Us</h4>
          <div className="email-wrapper">
            <p>Email</p>
            <span>needhelp@Organia.com</span>
          </div>
          <div className="phone-wrapper">
            <p>Phone</p>
            <span>666 888 888 </span>
          </div>
          <div className="adress-wrapper">
            <p>Adress</p>
            <span>88 road, borklyn street, USA</span>
          </div>
        </div>
        <div className="footer-mid-side">
          <div className="footer-mid-side-title">
            <img src={HerbalLogo} alt="Herbal" />
            <h4>Organick</h4>
          </div>
          <p>
            Simply dummy text of the printing and typesetting industry.
            <span> Lorem Ipsum simply dummy text of the printing</span>
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
