import React from "react";
import scss from "./header.module.scss";
import logo from "../../images/logo.png"
import icons from "../../svg/symbol-defs.svg"

const Header = () => {
  return (
    <header>
     <nav className={scss.nav}>
        <img src={logo} alt="logo" className={scss.logo} />
        <ul className={scss.menu}>
          <li>O nas</li>
          <li>Portfolio</li>
          <li>Oferta</li>
          <li>Kontakt</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
