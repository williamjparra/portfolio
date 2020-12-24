import React from 'react'
import Emoji from '../components/emojiSymbol'
import ProfileImg from '../img/avat.png'
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
                    <img alt="full-stack dev MERNg stack freelancer node backend passportJs" src={ProfileImg} />
                </div>
                <div className="content-description">
                    <p>
                    <Emoji symbol="🤓" label="Crazy" /><Emoji symbol="🤓" label="Crazy" />This is my portfolio, i'm a enthusiastic full-stack dev based in venezuela, my favorite stack is the MERNG stack that use React on the frontend, MongoDB as database for my projects and GraphQL that uses express to run on.<br/><Emoji symbol="👾" label="Crazy" /><Emoji symbol="👾" label="Crazy" />here you will see projects where i have work on and my personal ones, also you can check my Twitch and Youtube channels Where i upload videos and stream while i code or make tutorials of development.<Emoji symbol="👾" label="Crazy" /><Emoji symbol="👾" label="Crazy" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description