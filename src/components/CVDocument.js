import React from 'react';
import cvWiliam from '../William_Parra_CV.pdf'

const CVDocument = () => (
    <div className="pdf-conatiner">
        <iframe src={cvWiliam} width="100%" height="720px" title="CV">
        </iframe>
    </div>
)

export default CVDocument