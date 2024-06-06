import React from "react";
import "./Header.scss";
import logoImg from "../../assets/images/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/search.svg";
import uploadIcon from "../../assets/images/upload.svg";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logoImg} alt="brain-flix-logo"></img>
        </div>
        <div className="header__search-bar">
          <input type="text" placeholder="Search" />
          <button className="header__button header__button--upload">
            <img src={uploadIcon} alt="Upload Icon" className="header__button-icon" />
            UPLOAD
          </button>
          <div className="header__avatar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
