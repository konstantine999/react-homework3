import "./subscribe.css";
import SubscribeBackground from "../../Images/SubscribeBackground.png";

function Subscribe() {
  return (
    <div className="subscribe-wrapper">
      <img src={SubscribeBackground} alt="SubscribeBackground" />
      <div className="form-wrapper">
        <h3>
          Subscribe to <span>our Newsletter</span>
        </h3>
        <form>
          <input placeholder="Your Email Address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
