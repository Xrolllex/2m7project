import React from "react";
import scss from "../Footer/footer.module.scss"

const Footer = () => {
    return (
        <div className={scss.footer}>
            <div className={scss.logo_section}>
                <img src="" alt="" />
                <li>Facebook</li>
                <li>Instagram</li>
            </div>

            <div className={scss.contact}>
                <p>Kontakt</p>
                <li>email</li>
                <li>telefon</li>
            </div>

            <div className={scss.testimonials}>
            <li>Fixly</li>
            <li>Google</li>
            </div>

            <div className={scss.ig}>
                <img src="" alt="" />
            </div>
        </div>

    )
}

export default Footer;