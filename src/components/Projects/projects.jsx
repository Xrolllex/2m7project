import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import scss from "../Projects/project.module.scss"

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/api/projects')
            .then(response => response.json())
            .then(data => {
                console.log('Pobrane dane:', data);
                setProjects(data); 
            })
            .catch(error => console.error('Błąd pobierania danych:', error));
    }, []); 

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const slides = projects.map((project) => ({
        src: project.imagePath,
        alt: project.name,
    }));

    return (
        <div>
            <h2>Moje projekty</h2>
            <div className={scss.project_grid}>
                {projects.map((project, index) => (
                    <div key={project._id} className={scss.project_item}>
                        <img 
                            src={project.imagePath} 
                            alt={project.name} 
                            onClick={() => openLightbox(index)} // Otwórz lightbox po kliknięciu w obraz
                        />
                        <h3>{project.name}</h3>
                    </div>
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={slides}
                    index={photoIndex}
                    onIndexChange={setPhotoIndex}
                />
            )}
        </div>
    );
}

export default Projects;
