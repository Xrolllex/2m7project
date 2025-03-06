import React from "react";
import scss from "./form.module.scss";
import leftImage from "../../images/alex-wong-l5Tzv1alcps-unsplash 1.jpg";
import rightImage from "../../images/alex-wong-l5Tzv1alcps-unsplash 2.jpg";

const Form = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <img className={scss.sideImage} src={leftImage} alt="left" />
        <div className={scss.formWrapper}>
          <h3>Skontaktuj się z nami i stwórz swoje wymarzone wnętrze</h3>
          <form>
            <div className={scss.input_container}>
              <label htmlFor="name">Imię</label>
              <input type="text" id="name" />
            </div>
            <div className={scss.input_container}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={scss.input_container}>
              <label htmlFor="subject">Temat</label>
              <input type="text" id="subject" />
            </div>
            <div className={scss.input_container}>
              <label htmlFor="message">Twoja wiadomość</label>
              <textarea id="message" required></textarea>
            </div>
            <div className={scss.input_container}>
              <button className={scss.btn} type="submit">Wyślij</button>
            </div>
          </form>
        </div>
        <img className={scss.sideImage} src={rightImage} alt="right" />
      </div>
    </div>
  );
}

export default Form;