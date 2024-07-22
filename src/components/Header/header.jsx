import React from "react";
import scss from "./header.module.scss";
import logo from "../../images/321.png"

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.topbar}>
        <div className={scss.contact}>
        <p>Napisz do nas</p>
        <p>Zadzwoń do nas</p>
        </div>
        <div className={scss.socials}>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
      <nav className={scss.nav}>
        <img src={logo} alt="logo" className={scss.logo} />
        <ul>
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
