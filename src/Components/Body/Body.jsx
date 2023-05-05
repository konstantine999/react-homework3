import Lemon from "../../Images/Lemon.png";
import Carrot from "../../Images/Carrot.png";
import Leaf from "../../Images/Leaf.png";
import Tomato from "../../Images/Tomato.png";
import Raspberry from "../../Images/Raspberry.png";
import Orange from "../../Images/Orange.png";
import "../../Fonts/Roboto-Regular.ttf";
import "./body.css";

function Body() {
  return (
    <section>
      <div className="cards-wrapper">
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Lemon} alt="Lemon" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Fruits</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Carrot} alt="Carrot" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Farmer</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Leaf} alt="Leaf" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Leaf</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Tomato} alt="Tomato" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Fruits</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Raspberry} alt="Raspberry" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Farmer</p>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-image-wrapper">
            <img src={Orange} alt="Orange" />
          </div>
          <div className="card-information-wrapper">
            <h3>Green & Tasty Lemon</h3>
            <p>Farmer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
