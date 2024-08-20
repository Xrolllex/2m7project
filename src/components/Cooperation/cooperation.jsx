import React from "react";
import scss from "../Cooperation/cooperation.module.scss";
import woman from "../../images/marissa-grootes-ROlz8qgP2ms-unsplash-scaled.jpg";

const Cooperation = () => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.content}>
                <div className={scss.dsc}>
                    <h3>Jak wygląda współpraca z projektantem wnętrz?</h3>
                    <p>Maksymalnie angażujemy się w każdy projekt, dostarczając naszym klientom fachowe, merytoryczne wsparcie. Jednak tym, co nami kieruje i co wysuwa się na pierwszy plan są Twoje potrzeby, oczekiwania oraz budżet.

                    Bazując na tym, co nam opowiesz, przechodzimy do tworzenia kilku koncepcji. Nie musisz się zatem obawiać, że dostaniesz tylko jedną propozycję. Gdy zaakceptujesz któryś z zaprezentowanych wariantów, zajmiemy się wizualizacją pomieszczeń, i tu też otrzymujesz od nas kilka wariantów. Stale jesteśmy w kontakcie, ciągle masz realny wpływ na pracę projektanta wnętrz, co zwiększa szansę na stworzenie projektu idealnego.

                    A gdy ten już powstanie, przychodzi czas na zakupy
                    – zgodne z bardzo szczegółową listą dostarczoną przez nas.

                    Potrzebujesz wsparcia również na tym etapie? A może decydujesz się na meble na wymiar?

                    Skontaktujemy Cię z najlepszymi wykonawcami z Mazowieckiego – stolarzami i tapicerami, aby umożliwić Ci sprawne złożenie zamówienia. Przygotujemy też projekty wykonawcze dla poszczególnych ekip, w tym glazurników, elektryków, fachowców układających podłogi oraz szklarzy.</p>
                    <button className={scss.btn}>Dowiedz się więcej</button>
                </div>
                <div className={scss.image}>
                    <img src={woman} alt="Businesswoman" width="50%" height="auto" />
                </div>
            </div>
        </div>
    );
};

export default Cooperation;
