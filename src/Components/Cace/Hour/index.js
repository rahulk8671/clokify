import React from "react"
import Styled from "styled-components"

const Hour = Styled.div` 
	font-size: 11px;
	color: black;
	width: ${(props) => !props.isNumber && '5px'};
	height: ${(props) => !props.isNumber && '8px'};
	background: ${(props) => !props.isNumber && 'black'};
	transform: ${(props) => !props.isNumber && 'translate(50%, 0)'};
`

export default ({ number, isNumber }) => (
    <Hour isNumber={isNumber}>{isNumber && number}</Hour>
)
