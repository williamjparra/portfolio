import React from 'react'

import './css/Footer.css'

function Footer () {
    return(
        <footer>
            <div className="footer-container" id="contact-me">
                <div className="div-1 cards-div">
                    <ul>
                        <li>
                            <a href="http://twitter.com/williamjparra" target="blank">
                                <i class="fab fa-twitter"></i> Twitter
                            </a>        
                        </li>
                        <li>
                            <a href="http://instagram.com" target="blank">
                                <i class="fab fa-instagram-square"></i> Instagram
                            </a>        
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/william-parra-677a39175/" target="blank">
                                <i class="fab fa-linkedin"></i> Linkedin
                            </a>        
                        </li>
                    </ul>
                </div>
                <div className="div-2 cards-div">
                    <p>
                        i hope my portfolio liked you<br />if you want to contact me here is my social media<br />or you can email me on the link below.
                    </p>
                    <a href="mailto:w3webservices.net@gmail.com">
                        <h4>
                            My email: w3webservices.net@gmail.co
                        </h4>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer