import React from 'react'

// use this component when you want to show a image that could be unsuported by some explorers
// and you want to show a fallback image

const Picture = props => (
    <picture>
        <source srcSet={props.src} type="image/webp" />
        <source srcSet={props.src2 || ""} type="image/jp2" />
        <img src={props.srcFallback} alt={props.alt} />
    </picture>
)

export default Picture

