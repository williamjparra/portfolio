import React from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="buttons-container">
                <div className="logo">
                    <h1>
                        WilliamDev
                    </h1>
                </div>
                <div className="buttons">
                    <ul>
                        <li>
                            <Link to="#about-me">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="#my-projects">
                                My Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="#my-videos">
                                My videos
                            </Link>
                        </li>
                        <li>
                            <Link to="#contat-me">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar