import React from 'react'

import './css/videos.css'

function Videos() {
    return(
        <div className="videoContainer" id="my-videos">
            <div className="videoCard-1 card-video">
                <a href="http://twitch.tv/williamjparra">
                    <div className="description-container">
                        <h3>
                            My Twitch channel
                        </h3>
                    </div>
                </a>
            </div>
            <div className="videoCard-2 card-video">
                <a href="http://youtube.com/williamjparra">
                    <div className="description-container">
                        <h3>
                            My YouTube channel
                        </h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Videos