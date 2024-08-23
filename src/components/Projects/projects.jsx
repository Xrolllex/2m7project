import React, { useEffect, useState } from 'react';
import scss from "../Projects/project.module.scss"

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/projects')
            .then(response => response.json())
            .then(data => {
                console.log('Pobrane dane:', data);
                setProjects(data); 
            })
            .catch(error => console.error('Błąd pobierania danych:', error));
    }, []); 

    return (
        <div className={scss.project_grid}>
            {projects.map(project => (
                <div key={project._id} className={scss.project_item}>
                    <img src={project.imagePath} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p className={scss.description}>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
