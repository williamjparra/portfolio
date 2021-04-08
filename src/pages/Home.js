import React from 'react'
import './css/home.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

//componentes
import Description from '../components/Description'
import Projects from '../components/Projects'
import Videos from '../components/Videos'
//head tags component
import HeadTags from '../components/HeadTags'

//import images
import rainGif from '../img/rain.gif'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }   

    render() {
        return(
            <React.Fragment>
                <NavBar />
                <HeadTags 
                    pageTitle="William Dev"
                    metaDescription="william dev portfolio, Reactjs developer, full-stack dev, MERN stack, nodejs, and auth with passportjs"
                    metaKeywords="Developer, web-dev, reactjs, react native, full-stack, nodejs, expressjs"
                    metaAuthor="William Parra"
                    metaIndex="index"
                    ogUrl="https://williamjdevporfolio.vercel.app/"
                    ogSiteName="williamjDev"
                    ogImage={rainGif}
                    ogImageWidth="400"
                    ogImageHeigth="400"
                    twitterDescription="william dev portfolio, Reactjs developer, full-stack dev, MERN stack, nodejs, and auth with passportjs"
                    twitterTitle="WilliamDev Webpage"
                    twitterImage={rainGif}
                />
                <div className="container">
                    <Description name="about-me" />
                    <Projects name="my-projects" />
                    <Videos name="my-videos" />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home
