import React from "react";
import scss from "../Footer/footer.module.scss"
import logo from "../../images/301992775_807085337381727_478216419708036948_n_preview_rev_2.png"


const Footer = () => {
    return (
        <div className={scss.footerWrapper}>
        <div className={scss.footer}>
        <div className={scss.sections}>
          <div className={scss.logo_section}>
            <img src={logo} alt="logo" />
            <li>Facebook</li>
            <li>Instagram</li>
          </div>
        </div>
        
        <div className={scss.sections}>
          <div className={scss.contact}>
            <p>Kontakt</p>
            <li>email</li>
            <li>telefon</li>
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
    )
}

export default Footer;