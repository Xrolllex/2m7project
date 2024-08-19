import React from "react";
import scss from "./header.module.scss";
import logo from "../../images/logo.png"
import icons from "../../svg/symbol-defs.svg"

const Header = () => {
  return (
    <header>
      <div className={scss.topbar}>
        <div className={scss.contact}>
        <p>Napisz do nas</p>
        <p>Zadzwoń do nas</p>
        </div>
        <div className={scss.socials}>
        <li>
              <svg className={scss.icon} aria-hidden="true">
             <use xlinkHref={`${icons}#icon-facebook2`} />
             </svg>
              </li>
               <li>
                <svg className={scss.icon} aria-hidden="true">
                 <use xlinkHref={`${icons}#icon-instagram`} />
                  </svg>
               </li>
        </div>
      </div>
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
