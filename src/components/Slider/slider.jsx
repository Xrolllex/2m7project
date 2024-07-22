import React from "react";
import scss from "../Slider/slider.module.scss"


const Slider = () => {
    return (
        <div className={scss.slider}>
            <h1>Projektant wnętrz Warszawa</h1>
            <p className={scss.dsc}>Witaj w swoim nowym domu</p>
            <button className={scss.btn}>Zadzwoń</button>
        </div>
    )
}

export default Slider;