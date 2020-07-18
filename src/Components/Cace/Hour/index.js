import React from "react"
import Styled from "styled-components"

const Hour = Styled.div` 
	font-size: 11px;
	color: black;
`

export default ({ number }) => <Hour>{number}</Hour>