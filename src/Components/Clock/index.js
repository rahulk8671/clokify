import React from "react"
import Styled from "styled-components"

const Clock = Styled.div`
    border-radius: 50%;
    width: ${(props) => props.dimension + 'px' || "300px"};
    height: ${(props) => props.dimension + 'px' || "300px"};
    position: relative;
    background-color: yellow;
`

export default ({ children, dimension }) => (
    <Clock dimension={dimension}>{children}</Clock>
)
