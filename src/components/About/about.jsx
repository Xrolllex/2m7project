import React from "react";
import scss from "./about.module.scss";
import doors from '../../images/phil-5i0GnoTTjSE-unsplash2-1.jpg';

const About = () => {
    return (
        <section className={scss.container}>
          <div className={scss.backgroundDecoration}>
            <span className={scss.slash}>/</span>
            <div className={scss.underline}></div>
          </div>
          
          <div className={scss.imageWrapper}>
            <div className={scss.imageContainer}>
              <img
                src={doors}
                alt="Interior Design Showcase"
                className={scss.image}
              />
            </div>
          </div>
          <div className={scss.textContent}>
            <h2 className={scss.heading}>
            Dlaczego warto zlecić nam projektowanie wnętrz?
            </h2>
            <p className={scss.paragraph}>
            Z naszą pomocą nie będziesz musiał martwić się przebiegiem całej inwestycji, bo projektant wnętrz będzie czuwał nad zrealizowaniem jej zgodnie z założonym budżetem i harmonogramem.<br/>

<p>To wygoda i ogromna oszczędność czasu.</p>
Zamiast bazować wyłącznie na swojej wyobraźni, będziesz widział dokładnie, jaki jest projekt, w jakim kierunku zmierza, co czeka Cię na końcu tej, nie zawsze łatwej i przyjemnej ścieżki, jaką jest remont.<br/>

<p>Wiemy, że dla klientów współpracujących z architektem wnętrz wizja konkretnego projektu i wcielenia go w życie w najbliższym czasie jest największą motywacją i radością.<br/></p>

Daj sobie i swoim bliskim taką szansę – niech oczekiwanie na przeprowadzkę i odbiór kluczy do nowego domu czy wyremontowanego mieszkania będzie przyjemną przygodą.
            </p>
            <button className={scss.button}>
              Dowiedz się więcej
            </button>
          </div>
        </section>
    );
};

export default About;
