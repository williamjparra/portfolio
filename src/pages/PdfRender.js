import React from 'react'
import CVDocument from '../components/CVDocument'
import './css/pdf.css'
import { Link } from 'react-router-dom'
import Emoji from '../components/emojiSymbol'

const PdfRender = () => {
    return (
        <div className="pdf">
            <h1>
                this is my CV, i hope you like it 
                <Emoji symbol="😜" label="Crazy Face"/>
                <Emoji symbol="😜" label="Crazy Face"/>
            </h1>
            <p>
                <Link to="/">
                    Click here to go back to home page
                </Link>
            </p>
            <div className="pdfViewver" id="pdfViewver">
                <CVDocument />
            </div>
        </div>
    )
}

export default PdfRender