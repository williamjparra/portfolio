import React from 'react'

//this is an emoji component to make then compatible with reactjs
const emojiSymbol = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
)

export default emojiSymbol