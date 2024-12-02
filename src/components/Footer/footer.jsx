import React from "react";
import scss from "../Footer/footer.module.scss";
import logo from "../../images/301992775_807085337381727_478216419708036948_n_preview_rev_2.png";
import icons from "../../svg/symbol-defs.svg"

const Footer = () => {
    return (
        <div className={scss.footerWrapper}>
            <div className={scss.footer}>
                <div className={scss.sections}>
                    <div className={scss.logo_section}>
                        <img src={logo} alt="logo" width="250px" height="auto" />
                        <div className={scss.social}>
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
                </div>

                <div className={scss.sections}>
                    <div className={scss.contact}>
                        <h3>Menu</h3>
                        <div className={scss.menu}>
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Oferta</a></li>
                        <li><a href="#">Kontakt</a></li>
                        </div> 
                        <hr />
                        <div className={scss.under}>
                        <li><a>biuro@2m7Project.com</a></li>
                        <li><a>156165645</a></li>
                        </div>
                    </div>
                </div>

                <div className={scss.sections}>
                    <div className={scss.testimonials}>
                        <li>Fixly</li>
                        <li>Google</li>
                    </div>
                </div>

                <div className={scss.sections}>
                    <div className={scss.ig}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
