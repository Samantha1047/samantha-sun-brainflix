import { Link } from "react-router-dom";
import "./Header.scss";
import logoImg from "../../assets/images/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/upload.svg";

const Header = () => {
  return (
    <header>
      <section className="header">
        <section className="header__logo">
          <Link to="/" className="header__logo-link">
            <img src={logoImg} alt="brain-flix-logo"></img>
          </Link>
        </section>

        <div className="header__search-bar">
          <input type="text" placeholder="Search" />
          <Link to="/upload" className="header__button-link">
            <button className="header__button header__button--upload">
              <img src={uploadIcon} alt="upload-icon" className="header__button-icon" />
              UPLOAD
            </button>
          </Link>
          <section className="header__avatar"></section>
        </div>
      </section>
    </header>
  );
};

export default Header;
