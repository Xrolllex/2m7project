import React from 'react';
import scss from "../Header/header.module.scss";

const Header = () => {
    return (
        <>
            <header className={scss.header}>
            <div className={scss.topbar}>
                <p>Napisz do nas</p>
                <p>Zadzwoń do nas</p>
            </div>
            <nav className={scss.nav}>
                <img src="" alt="" className={scss.logo} />
                <ul>
                    <li>O nas</li>
                    <li>Portfolio</li>
                    <li>Oferta</li>
                    <li>Kontakt</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </header>
         
        </>
      );
    };

    export default Header;