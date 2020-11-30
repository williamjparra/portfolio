import React from 'react'
import Project from '../utils/projects.json'

const Projects = () => {
    return(
        <div className="projects-container" id="my-projects">
            {
                Project.map(project => (
                    <div className="project-card" key={project.img}>
                        <div className="img-container">
                            <a href={project.link} target="BLANK" >
                                <img src={project.img} alt={project.title} />
                            </a>
                        </div>
                        <a href={project.link} target="BLANK">
                            <h3>
                                {project.title}
                            </h3>
                        </a>
                        <p>
                            {project.description}
                        </p>                        
                    </div>
                ))
            }
        </div>
    )
}

export default Projects