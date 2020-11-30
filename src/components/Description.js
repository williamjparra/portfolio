import React from 'react'
import Emoji from '../components/emojiSymbol'
//import ProfileImg from '../img/IMG_2982.webp'
import './css/description.css'

function Description() {
    return(
        <div className="description-container" id="about-me">
            <h3>
                <Emoji symbol="😜" label="Crazy Face" />
                    Hi!, i'm William a Full-stack Dev
                <Emoji symbol="😜" label="Crazy Face" />
            </h3>
            <div className="card-container">
                <div className="image-container">
                    <img alt="full-stack dev MERN stack freelancer node backend" src="src" />
                </div>
                <div className="content-description">
                    <p>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description