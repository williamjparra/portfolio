import React, { useState } from 'react'
import './css/Navbar.css'
import { Link } from 'react-scroll'
import { Link as Anchor } from 'react-router-dom'

function Navbar() {
    var [toggleOn, setToggleOn] = useState(true)

    const changeBehavior = () => {
        if (toggleOn === true) {
            setToggleOn(false)
        } else {
            setToggleOn(true)
        }
    }

    return (
        <React.Fragment>
            <nav>
                <div className="buttons-container">
                    <div className="logo">
                        <Anchor to="/">
                            <h1>
                                WilliamDev
                            </h1>
                        </Anchor>
                    </div>
                    <div className="buttons">
                        <ul>
                            <li>
                                <Anchor to>
                                    <Link activeClass="active" to="about-me" spy={true} smooth={true} offset={50} >
                                        About Me
                                    </Link>
                                </Anchor>
                            </li>
                            <li>
                                <Anchor to="/">
                                    <Link activeClass="active" to="my-projects" spy={true} smooth={true} offset={50} >
                                        My Projects
                                    </Link>
                                </Anchor>
                            </li>
                            <li>
                                <Anchor to="/">
                                    <Link activeClass="active" to="my-videos" spy={true} smooth={true} offset={50} >
                                        My videos
                                    </Link>
                                </Anchor>
                            </li>
                            <li>
                                <Anchor to="/">
                                    <Link activeClass="active" to="contact-me" spy={true} smooth={true} offset={50} >
                                        Contact Me
                                    </Link>
                                </Anchor>
                            </li>
                            <li>
                                <Anchor to="/pdf">
                                    <Link activeClass="active" to="pdfViewver" spy={true} smooth={true} offset={50} >
                                    
                                    </Link>
                                        CV
                                </Anchor>
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
                        HI<br />this is my portfolio<br />I hope you like it<br /> i have very intersing projects down there.<br />
                        {toggleOn === false  && (
                            <span className="sorry-Words">
                                oooh sorry if that where to much movement
                            </span>
                        )}
                    </h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar