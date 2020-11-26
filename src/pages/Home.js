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
    
    setMotion = () => {
        this.state.active ? this.setState({active: false}) : this.setState({active: true})
    }    

    render() {
        return(
            <React.Fragment>
                <div className={this.state.active ? "header-active" : "header-unactive"}>

                </div>
                <div className="container">
                    <Description />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
