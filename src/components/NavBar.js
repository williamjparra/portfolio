import React from 'react'
import './css/Navbar.css'

function Navbar() {

    const changeBehavior = (e) => {
        console.log(e)
    }

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
                            About Me
                        </li>
                        <li>
                            My Projects
                        </li>
                        <li>
                            My viedeos
                        </li>
                        <li>
                            Contact Me
                        </li>
                    </ul>
                </div>
            </div>
            <div className="toggle-container">
                <label className="switch" onChange={changeBehavior}>
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    )
}

export default Navbar