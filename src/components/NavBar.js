import React, { useState } from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    var [toggleOn, setToggleOn] = useState(true)

    const changeBehavior = () => {
        if (toggleOn === true) {
            setToggleOn(false)
        } else {
            setToggleOn(true)
        }
        console.log(toggleOn)
    }

    return (
        <React.Fragment>
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
                <div className="toggle-switch">
                    <small>
                        Switch of 
                    </small>
                    <label className="switch">                        
                        <input type="checkbox" onChange={changeBehavior} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </nav>
            <div className={ toggleOn === true ? "header-active" : "header-unactive" } >
                <div className="word-container">
                    <h2>
                        HI<br />this is my portfolio<br />I hope you like it<br /> i have very intersing projecst down there.<br />
                        {toggleOn === false  && (
                            <span className="sorry-Words">
                                Ho sorry if that where to much movement
                            </span>
                        )}
                    </h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar