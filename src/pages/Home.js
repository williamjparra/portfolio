import React from 'react'
import './css/home.css'

//componentes
import Description from '../components/Description'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }   

    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <Description />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
