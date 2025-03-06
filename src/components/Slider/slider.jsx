import React from "react";
import scss from "../Slider/slider.module.scss";
import stairs from "../../images/jason-wang-5MG8cQbw-T8-unsplash.jpg";

export default function HeroSection() {
  return (
    <section className={scss.wrapper}>
      <div className={scss.container}>
        <div className={scss.circleTopLeft}></div>
        <div className={scss.circleBottomRight}></div>

        <div className={scss.textContent}>
          <div className={scss.titleWrapper}>
            <h1 className={scss.title}>
              <span className={scss.boldText}>PROJEKTANT WNĘTRZ</span>
              
            </h1>
            <span className={scss.slash}>/</span>
            <div className={scss.underline}></div>
          </div>
          <p className={scss.description}>
            Spełniamy marzenia o pięknych i funkcjonalnych wnętrzach – domowych i biurowych.
          </p>
          
          <div className={scss.buttons}>
            <button className={scss.buttonPrimary}>Zacznij</button>
          </div>
        </div>

        <div className={scss.imageWrapper}>
          <div className={scss.image}>
            <img className={scss.stairs} src={stairs} alt="stairs" height="50px" width="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}