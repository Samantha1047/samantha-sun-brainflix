import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logoImg from "../../assets/images/BrainFlix-logo.svg";
import uploadIcon from "../../assets/images/upload.svg";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logoImg} alt="brain-flix-logo"></img>
        </div>
        <div className="header__search-bar">
          <input type="text" placeholder="Search" />
          <Link to="/upload" className="header__button-link">
            <button className="header__button header__button--upload">
              <img src={uploadIcon} alt="upload-icon" className="header__button-icon" />
              UPLOAD
            </button>
          </Link>
          <div className="header__avatar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
