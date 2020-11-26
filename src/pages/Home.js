import React from 'react'
import './css/home.css'

//componentes
import Description from '../components/Description'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
    }   

    render() {
        return(
            <React.Fragment>
                <div className="header-active" >

                </div>
                <div className="container">
                    <Description />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
