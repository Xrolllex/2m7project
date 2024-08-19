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
                        <img src={logo} alt="logo" width="150px" height="auto" />
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
                        <p>Kontakt</p>
                        <li>Email</li>
                        <li>Telefon</li>
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
