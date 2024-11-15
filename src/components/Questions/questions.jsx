import React from "react";
import scss from "../Questions/questions.module.scss"
import icons from "../../svg/symbol-defs.svg#icon-home"

const Questions = () => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.list}>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-stopwatch`} />
            </svg>
                <p>Nie masz czasu?</p>
            </li>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-coin-dollar`} />
            </svg>
                <p>Chcesz dobrze wydać pieniądze?</p>
            </li>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-play3`} />
            </svg>
                <p>Nie wiesz od czego zacząć?</p>
            </li>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-spinner3`} />
            </svg>
                <p>Widziałeś wiele zdjęć, pomysłów, stylów, masz w głowie chaos?</p>
            </li>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-home`} />
            </svg>
                <p>Chciałbyś pracować w domu, ale mieszkanie nie jest funkcjonalne i trzeba to zmienić?</p>
            </li>
            <li>
            <svg className={scss.icon}>
            <use xlinkHref={`${icons}#icon-magic-wand`} />
            </svg>
                <p>Postanowiłeś zmienić wystrój domu, kupiłeś nowe mieszkanie?</p>
            </li>
        </div>
        </div>
)}


export default Questions;