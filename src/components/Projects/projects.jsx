import React, { useEffect, useState } from 'react';

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
        <div className="project-grid">
            {projects.map(project => (
                <div key={project._id} className="project-item">
                    <img src={project.imagePath} alt={project.name} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
