import React, {useState} from "react";
import scss from "../Cooperation/cooperation.module.scss";
import woman from "../../images/1231.png";

const Cooperation = () => {
    const [selectedStep, setSelectedStep] = useState(1); // Domyślnie pierwszy krok jest wybrany

    const steps = [
        { id: 1, title: 'Kontakt', description: 'Maksymalnie angażujemy się w każdy projekt, dostarczając fachowe, merytoryczne wsparcie. Twoje potrzeby, oczekiwania oraz budżet są dla nas najważniejsze. Bazując na Twoich opowieściach, tworzymy kilka różnych koncepcji.', icon: 'path/to/icon1.png' },
        { id: 2, title: 'Umowa', description: 'Nie musisz obawiać się, że dostaniesz tylko jedną propozycję. Gdy zaakceptujesz jedną z naszych zaprezentowanych koncepcji, przystępujemy do wizualizacji. Otrzymujesz od nas kilka wariantów, a my stale jesteśmy w kontakcie.', icon: 'path/to/icon3.png' },
        { id: 4, title: 'Projektowanie', description: 'Cały czas masz realny wpływ na pracę projektanta wnętrz, co zwiększa szansę na stworzenie projektu idealnego. A gdy ten już powstanie, przygotujemy szczegółową listę zakupów zgodną z projektem.', icon: 'path/to/icon4.png' },
        { id: 5, title: 'Realizacja', description: 'Potrzebujesz wsparcia przy realizacji? Skontaktujemy Cię z najlepszymi wykonawcami z Mazowsza: stolarzami, tapicerami, glazurnikami, elektrykami i innymi fachowcami. Otrzymasz od nas projekty wykonawcze dla poszczególnych ekip.', icon: 'path/to/icon5.png' },
    ];

    return (
        <div className={scss.container}>
       
        <div className={scss.steps}>
            {steps.map((step) => (
                <div 
                    key={step.id} 
                    className={`${scss.step} ${selectedStep === step.id ? scss.active : ''}`} 
                    onClick={() => setSelectedStep(step.id)}
                >
                    <div className={scss.icon}>
                        <img src={step.icon} alt={step.title} />
                    </div>
                    <h3>{step.title}</h3>
                </div>
            ))}
        </div>
    <hr />
        {selectedStep && (
            <div className={scss.description}>
                <p>{steps.find(step => step.id === selectedStep).description}</p>
            </div>
        )}
    
    </div>
    
    );
}


export default Cooperation;
