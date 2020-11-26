import React from 'react'
import './css/Navbar.css'

function Navbar() {
    var activeToggle = true

    const changeBehavior = (event) => {
        var el = document.getElementById("activateElement")

        activeToggle = activeToggle ? false : true

        if(activeToggle) {
            el.setAttribute("checked", "true")
        } else {
            el.removeAttribute("checked")
        }
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
        </nav>
    )
}

export default Navbar