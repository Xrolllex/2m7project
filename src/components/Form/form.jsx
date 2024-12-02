import React from "react";
import scss from "./form.module.scss";
import stairs from "../../images/norman-brown-FVaimgno3dw-unsplash-scaled.jpg";



const Form = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <img className={scss.stairs} src={stairs} alt="stairs" width="25%" height="auto" />
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
              <textarea id="message" required="true"></textarea>
            </div>
            <div className={scss.input_container}>
              <button className={scss.btn} type="submit">Wyślij</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
