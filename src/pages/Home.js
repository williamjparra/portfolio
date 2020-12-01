import React from 'react'
import './css/home.css'

//componentes
import Description from '../components/Description'
import Projects from '../components/Projects'
import Videos from '../components/Videos'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }   

    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <Description name="about-me" />
                    <Projects name="my-projects" />
                    <Videos name="my-videos" />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
