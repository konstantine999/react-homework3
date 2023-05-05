import HeaderBackground from "../../Images/HeaderBackground.png";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <img className="header-background" src={HeaderBackground} />
      </div>
    </header>
  );
}
export default Header;
