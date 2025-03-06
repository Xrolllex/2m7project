import React from "react";
import scss from "../Slider/slider.module.scss"
import stairs from "../../images/phil-5i0GnoTTjSE-unsplash2-1.jpg";


export default function HeroSection() {
    return (
        <section className={scss.wrapper}>
        <div className={scss.container}>
          {/* Tekst */}
          <div className={scss.textContent}>
            <h1 className={scss.title}>
             PROJEKTANT WNĘTRZ</h1>
            <p className={scss.description}>
            Spełniamy marzenia o pięknych i funkcjonalnych wnętrzach – domowych i biurowych. 
            </p>
            <div className={scss.buttons}>
              <button className={scss.buttonPrimary}>Zacznij</button>
              <button className={scss.buttonSecondary}>Dowiedz się więcej</button>
            </div>
          </div>
          
          {/* Obrazek */}
          <div className={scss.imageWrapper}>
            <div className={scss.circleDecoration}></div>
            <div className={scss.image}>
              <img className={scss.stairs} src={stairs} alt="stairs" height="50px" width="auto"/>
            </div>
          </div>
        </div>
      </section>
    );
  }

