import React from 'react'
import Project from '../utils/projects.json'

//importamos las imagenes
import movieApiImg from '../img/Movie-api.webp'
import reactBabgest from '../img/video-to-gif-converter.gif'
import MERNGImage from '../img/merngStack.webp'
import ReduxImg from '../img/react-redux.png'

//importamos los estilos
import './css/Projects.css'

const Projects = () => {
    return(
        <div className="projects-container" id="my-projects">
            {
                Project.map((project, i) => {
                    var imagesImported = [
                        movieApiImg,
                        reactBabgest,
                        MERNGImage,
                        ReduxImg
                    ]

                    return(
                        <div className={`project-card card${i}`} key={i}>
                            <div className="img-container">
                                <a href={project.link} target="BLANK" >
                                    <img src={imagesImported[i]} alt={project.title} />
                                </a>
                            </div>
                            <div className="project-description-container">
                                <a href={project.link} target="BLANK" id={i + 1}>
                                    <h3>
                                        {project.title}
                                    </h3>
                                </a>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects